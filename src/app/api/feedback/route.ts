import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      feedbackType,
      relatedVolume,
      relatedChapter,
      relatedFirmId,
      userName,
      userEmail,
      feedbackText,
    } = body;

    if (!feedbackText || !feedbackType) {
      return NextResponse.json(
        { error: "Feedback text and type are required" },
        { status: 400 }
      );
    }

    const feedback = await db.feedbackSubmission.create({
      data: {
        feedbackType,
        relatedVolume,
        relatedChapter,
        relatedFirmId,
        userName,
        userEmail,
        feedbackText,
        status: "New",
      },
    });

    return NextResponse.json({ success: true, feedback });
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit feedback" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const type = searchParams.get("type");

    const where: Record<string, unknown> = {};
    if (status) where.status = status;
    if (type) where.feedbackType = type;

    const feedbacks = await db.feedbackSubmission.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    return NextResponse.json({ feedbacks });
  } catch (error) {
    console.error("Feedback fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch feedback" },
      { status: 500 }
    );
  }
}
