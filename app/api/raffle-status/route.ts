import { type NextRequest, NextResponse } from "next/server";
import { userTickets } from "@/lib/mock-db";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  // Get ticket count from our mock database
  const tickets = userTickets[userId] || 0;

  return NextResponse.json({ tickets });
}
