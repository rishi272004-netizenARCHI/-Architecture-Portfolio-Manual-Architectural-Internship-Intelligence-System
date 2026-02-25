import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/firms/[id] - Get single firm
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const firm = await db.firm.findUnique({
      where: { id },
      include: {
        tags: true,
        rankings: true,
      },
    });
    
    if (!firm) {
      return NextResponse.json({ error: 'Firm not found' }, { status: 404 });
    }
    
    // Get related firms (same city or typology)
    const relatedFirms = await db.firm.findMany({
      where: {
        AND: [
          { id: { not: id } },
          { isActive: true },
          {
            OR: [
              { city: firm.city },
              { primaryTypology: firm.primaryTypology },
            ],
          },
        ],
      },
      take: 6,
      orderBy: { name: 'asc' },
    });
    
    return NextResponse.json({ firm, relatedFirms });
  } catch (error) {
    console.error('Error fetching firm:', error);
    return NextResponse.json(
      { error: 'Failed to fetch firm' },
      { status: 500 }
    );
  }
}

// PUT /api/firms/[id] - Update firm
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const firm = await db.firm.update({
      where: { id },
      data: {
        name: body.name,
        normalizedName: body.name
          ?.toLowerCase()
          .replace(/[^\w\s]/g, '')
          .replace(/\s+/g, ' ')
          .trim(),
        city: body.city,
        state: body.state,
        country: body.country,
        principalArchitect: body.principalArchitect,
        yearEstablished: body.yearEstablished,
        scaleCategory: body.scaleCategory,
        tierCategory: body.tierCategory,
        primaryTypology: body.primaryTypology,
        secondaryTypology: body.secondaryTypology,
        designOrientation: body.designOrientation,
        technicalOrientation: body.technicalOrientation,
        bimIntensity: body.bimIntensity,
        internshipPotential: body.internshipPotential,
        siteExposure: body.siteExposure,
        researchIntensity: body.researchIntensity,
        website: body.website,
        officialEmail: body.officialEmail,
        notes: body.notes,
        isActive: body.isActive,
      },
    });
    
    return NextResponse.json(firm);
  } catch (error) {
    console.error('Error updating firm:', error);
    return NextResponse.json(
      { error: 'Failed to update firm' },
      { status: 500 }
    );
  }
}

// DELETE /api/firms/[id] - Delete firm (soft delete)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Soft delete
    const firm = await db.firm.update({
      where: { id },
      data: { isActive: false },
    });
    
    return NextResponse.json({ success: true, firm });
  } catch (error) {
    console.error('Error deleting firm:', error);
    return NextResponse.json(
      { error: 'Failed to delete firm' },
      { status: 500 }
    );
  }
}
