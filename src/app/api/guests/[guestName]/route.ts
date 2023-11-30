import { NextResponse } from "next/server";
import { InvitatedPeople } from "../../../../../public/data/invitated-people";

export async function GET(req: Request, context: any) {
  const { params } = context;

  const guest = InvitatedPeople.filter(
    (guest) => guest.name === params.guestName
  );

  return NextResponse.json({
    guest,
  });
}
