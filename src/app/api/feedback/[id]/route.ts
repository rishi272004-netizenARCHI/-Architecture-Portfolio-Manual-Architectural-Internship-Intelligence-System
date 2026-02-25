import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, adminNotes } = body;

    const updateData: { status?: string; adminNotes?: string } = {};
    if (status) updateData.status = status;
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;

    const feedback = await db.feedbackSubmission.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ success: true, feedback });
  } catch (error) {
    console.error("Feedback update error:", error);
    return NextResponse.json(
      { error: "Failed to update feedback" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await db.feedbackSubmission.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete feedback" },
      { status: 500 }
    );
  }
}
