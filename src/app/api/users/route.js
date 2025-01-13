import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const { name, email } = await request.json();
  return prisma.user
    .create({ data: { name, email } })
    .then((newUser) =>
      NextResponse.json({ status: 201, message: "User created successfully", data: newUser })
    )
    .catch((error) => NextResponse.error({ status: 500, statusText: error.message }));
}


export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ status: 200,message: "Users fetched successfully", data: users });
    } catch (error) {
        return NextResponse.error({ status: 500, statusText: error.message });
    }
}