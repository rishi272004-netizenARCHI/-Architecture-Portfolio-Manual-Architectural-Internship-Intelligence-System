import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/firms/stats - Get statistics for dashboard
export async function GET() {
  try {
    // Total counts
    const totalFirms = await db.firm.count({ where: { isActive: true } });
    
    // By city
    const byCity = await db.firm.groupBy({
      by: ['city'],
      where: { isActive: true },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
      take: 10,
    });
    
    // By state
    const byState = await db.firm.groupBy({
      by: ['state'],
      where: { isActive: true },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
    });
    
    // By scale
    const byScale = await db.firm.groupBy({
      by: ['scaleCategory'],
      where: { isActive: true },
      _count: { id: true },
    });
    
    // By tier
    const byTier = await db.firm.groupBy({
      by: ['tierCategory'],
      where: { isActive: true },
      _count: { id: true },
    });
    
    // By typology
    const byTypology = await db.firm.groupBy({
      by: ['primaryTypology'],
      where: { isActive: true },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
    });
    
    // By design orientation
    const byDesign = await db.firm.groupBy({
      by: ['designOrientation'],
      where: { isActive: true },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
    });
    
    // BIM intensity
    const byBim = await db.firm.groupBy({
      by: ['bimIntensity'],
      where: { isActive: true },
      _count: { id: true },
    });
    
    // Internship potential
    const byInternship = await db.firm.groupBy({
      by: ['internshipPotential'],
      where: { isActive: true },
      _count: { id: true },
    });
    
    return NextResponse.json({
      totalFirms,
      byCity: byCity.map(item => ({ city: item.city, count: item._count.id })),
      byState: byState.map(item => ({ state: item.state, count: item._count.id })),
      byScale: byScale.map(item => ({ scale: item.scaleCategory, count: item._count.id })),
      byTier: byTier.map(item => ({ tier: item.tierCategory, count: item._count.id })),
      byTypology: byTypology.map(item => ({ typology: item.primaryTypology, count: item._count.id })),
      byDesign: byDesign.map(item => ({ design: item.designOrientation, count: item._count.id })),
      byBim: byBim.map(item => ({ bim: item.bimIntensity, count: item._count.id })),
      byInternship: byInternship.map(item => ({ potential: item.internshipPotential, count: item._count.id })),
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
