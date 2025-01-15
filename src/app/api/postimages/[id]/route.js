import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



export async function DELETE(request, { params }) {
    const { id } = await params
    try {
        await prisma.postimage.delete({
            where : {
                id : parseInt(id)
            }
        })
        return NextResponse.json({
            status : 200,
            message : "Postimage deleted successfully"
        })
    } catch (error) {
        return NextResponse.json({
            status : 500,
            message : error.message
        })
    }
}