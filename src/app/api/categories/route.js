import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function POST(request) {
    const {category_name} = await request.json();
    try {
        const newCategory = await prisma.category.create({
            data : {
                category_name
            }
        })

        return NextResponse.json({ status: 201, message: "Category created successfully", data: newCategory });
    } catch (error) {
        return NextResponse.error({ status: 500, statusText: error.message });
    }
    
}