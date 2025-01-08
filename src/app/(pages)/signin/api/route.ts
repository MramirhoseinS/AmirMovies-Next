import { NextRequest, NextResponse } from "next/server";
import { users } from "./users";

interface ILoginBody {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const data: ILoginBody = await request.json();

  if (!data.username || !data.password) {
    return NextResponse.json("Please fill all the list", { status: 400 });
  }
  const user = users.find((e) => e.username === data.username);
  if (!user) {
    return NextResponse.json("User not found", { status: 400 });
  }
  if (user.password !== data.password) {
    return NextResponse.json("Password not valid", { status: 400 });
  }
  return NextResponse.json(user, { status: 200 });

}
