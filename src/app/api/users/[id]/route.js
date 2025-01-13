import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const id = parseInt(params.id);

    try {
        const users = await prisma.user.findUnique({ where: { id } });
        return NextResponse.json({ status: 200, message: "User fetched successfully", data: users });
    } catch (error) {
        return NextResponse.error({ status: 500, statusText: error.message });
    }
}


export async function PUT(request, { params }) {
    try {
        const id = parseInt(params.id);
        const data = await request.json();

        const {name,email} = data;

        const updateUser = await prisma.user.update({
            where : {
                id
            },
            data : {
                name,
                email
            }
        })

        return NextResponse.json({ status: 200, message: "User updated successfully", data: updateUser });
    } catch (error) {
        return NextResponse.error({ status: 500, message: error.message });
    }
}


export async function DELETE(request, { params }) {
    const id = parseInt(params.id);

    if (!id) {
        return NextResponse.json({
            status: 400,
            message: "User id is required"
        });
    }
    try {
        const user = await prisma.user.delete({ where: { id } });
        return NextResponse.json({
            status: 200,
            message: "User deleted successfully"
        });
    } catch (error) {
        if (error.code === "P2025") {
            // Prisma specific error for record not found
            return NextResponse.json({
                status: 404,
                message: "User not found"
            });
        }
        return NextResponse.json({
            status: 500,
            message: error.message
        });
    }
}

