import { type NextRequest, NextResponse } from "next/server";
import { userTickets } from "@/lib/mock-db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Initialize if user doesn't exist
    if (!userTickets[userId]) {
      userTickets[userId] = 0;
    }

    // Add a ticket
    userTickets[userId] += 1;

    return NextResponse.json({
      success: true,
      tickets: userTickets[userId],
    });
  } catch (error) {
    console.error("Error processing raffle entry:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process raffle entry",
      },
      { status: 500 }
    );
  }
}
