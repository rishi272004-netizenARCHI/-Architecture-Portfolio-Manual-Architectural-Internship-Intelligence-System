import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/firms/filters - Get unique filter values with state-city mapping
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const state = searchParams.get('state');

    // If state is provided, return cities for that state only
    if (state && state !== '__all__') {
      const cities = await db.firm.findMany({
        where: { 
          isActive: true,
          state: state,
        },
        select: { city: true },
        distinct: ['city'],
        orderBy: { city: 'asc' },
      });

      return NextResponse.json({
        cities: cities.map(c => c.city).filter(Boolean),
      });
    }

    // Get all unique values for each filter
    const [cities, states, scales, tiers, typologies, designs, technicals, bimLevels, allFirms] = await Promise.all([
      db.firm.findMany({
        where: { isActive: true },
        select: { city: true, state: true },
        distinct: ['city', 'state'],
        orderBy: { city: 'asc' },
      }),
      db.firm.findMany({
        where: { isActive: true },
        select: { state: true },
        distinct: ['state'],
        orderBy: { state: 'asc' },
      }),
      db.firm.findMany({
        where: { isActive: true },
        select: { scaleCategory: true },
        distinct: ['scaleCategory'],
        orderBy: { scaleCategory: 'asc' },
      }),
      db.firm.findMany({
        where: { isActive: true },
        select: { tierCategory: true },
        distinct: ['tierCategory'],
        orderBy: { tierCategory: 'asc' },
      }),
      db.firm.findMany({
        where: { isActive: true },
        select: { primaryTypology: true },
        distinct: ['primaryTypology'],
        orderBy: { primaryTypology: 'asc' },
      }),
      db.firm.findMany({
        where: { isActive: true },
        select: { designOrientation: true },
        distinct: ['designOrientation'],
        orderBy: { designOrientation: 'asc' },
      }),
      db.firm.findMany({
        where: { isActive: true },
        select: { technicalOrientation: true },
        distinct: ['technicalOrientation'],
        orderBy: { technicalOrientation: 'asc' },
      }),
      db.firm.findMany({
        where: { isActive: true },
        select: { bimIntensity: true },
        distinct: ['bimIntensity'],
        orderBy: { bimIntensity: 'asc' },
      }),
      // Get all firms for state-city mapping
      db.firm.findMany({
        where: { isActive: true },
        select: { city: true, state: true },
      }),
    ]);

    // Build state-to-cities mapping
    const stateCitiesMap: Record<string, string[]> = {};
    allFirms.forEach(firm => {
      if (firm.state && firm.city) {
        if (!stateCitiesMap[firm.state]) {
          stateCitiesMap[firm.state] = [];
        }
        if (!stateCitiesMap[firm.state].includes(firm.city)) {
          stateCitiesMap[firm.state].push(firm.city);
        }
      }
    });

    // Sort cities within each state
    Object.keys(stateCitiesMap).forEach(state => {
      stateCitiesMap[state].sort();
    });

    return NextResponse.json({
      cities: [...new Set(cities.map(c => c.city))].filter(Boolean).sort(),
      states: states.map(s => s.state).filter(Boolean),
      scales: scales.map(s => s.scaleCategory).filter(Boolean),
      tiers: tiers.map(t => t.tierCategory).filter(Boolean),
      typologies: typologies.map(t => t.primaryTypology).filter(Boolean),
      designs: designs.map(d => d.designOrientation).filter(Boolean),
      technicals: technicals.map(t => t.technicalOrientation).filter(Boolean),
      bimLevels: bimLevels.map(b => b.bimIntensity).filter(Boolean),
      stateCitiesMap,
    });
  } catch (error) {
    console.error('Error fetching filter values:', error);
    return NextResponse.json(
      { error: 'Failed to fetch filter values' },
      { status: 500 }
    );
  }
}
