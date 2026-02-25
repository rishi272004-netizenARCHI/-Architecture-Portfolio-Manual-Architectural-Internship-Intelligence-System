import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/firms - List firms with filtering
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Pagination
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;
    
    // Filter parameters
    const city = searchParams.get('city');
    const state = searchParams.get('state');
    const scaleCategory = searchParams.get('scaleCategory');
    const tierCategory = searchParams.get('tierCategory');
    const primaryTypology = searchParams.get('primaryTypology');
    const designOrientation = searchParams.get('designOrientation');
    const technicalOrientation = searchParams.get('technicalOrientation');
    const bimIntensity = searchParams.get('bimIntensity');
    const internshipPotential = searchParams.get('internshipPotential');
    const search = searchParams.get('search');
    
    // Sorting parameters
    const sortBy = searchParams.get('sortBy') || 'name';
    const sortOrder = searchParams.get('sortOrder') || 'asc';
    
    // Build where clause
    const where: Record<string, unknown> = { isActive: true };
    
    if (city) where.city = city;
    if (state) where.state = state;
    if (scaleCategory) where.scaleCategory = scaleCategory;
    if (tierCategory) where.tierCategory = tierCategory;
    if (primaryTypology) where.primaryTypology = primaryTypology;
    if (designOrientation) where.designOrientation = designOrientation;
    if (technicalOrientation) where.technicalOrientation = technicalOrientation;
    if (bimIntensity) where.bimIntensity = bimIntensity;
    if (internshipPotential) where.internshipPotential = internshipPotential;
    
    if (search) {
      where.OR = [
        { name: { contains: search } },
        { principalArchitect: { contains: search } },
        { city: { contains: search } },
      ];
    }
    
    // Build orderBy clause
    const validSortFields = ['name', 'city', 'state', 'scaleCategory', 'tierCategory', 'primaryTypology', 'bimIntensity', 'internshipPotential'];
    const orderByField = validSortFields.includes(sortBy) ? sortBy : 'name';
    const orderBy = { [orderByField]: sortOrder === 'desc' ? 'desc' : 'asc' };
    
    // Get firms
    const [firms, total] = await Promise.all([
      db.firm.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          tags: true,
        },
      }),
      db.firm.count({ where }),
    ]);
    
    return NextResponse.json({
      firms,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching firms:', error);
    return NextResponse.json(
      { error: 'Failed to fetch firms' },
      { status: 500 }
    );
  }
}

// POST /api/firms - Create new firm
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Normalize name for duplicate detection
    const normalizedName = body.name
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Check for duplicates
    const existing = await db.firm.findFirst({
      where: { normalizedName },
    });
    
    if (existing) {
      return NextResponse.json(
        { error: 'Firm with this name already exists', existing },
        { status: 400 }
      );
    }
    
    const firm = await db.firm.create({
      data: {
        name: body.name,
        normalizedName,
        city: body.city,
        state: body.state,
        country: body.country || 'India',
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
        dataSource: 'Manual entry',
      },
    });
    
    return NextResponse.json(firm, { status: 201 });
  } catch (error) {
    console.error('Error creating firm:', error);
    return NextResponse.json(
      { error: 'Failed to create firm' },
      { status: 500 }
    );
  }
}
