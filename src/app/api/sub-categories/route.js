import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function POST(request) {
    const {subcategory_name,categoryId} = await request.json();
    try {
        const newCategory = await prisma.subCategory.create({
            data : {
                subcategory_name,
                categoryId
            }
        })

        return NextResponse.json({ status: 201, message: "Category created successfully", data: newCategory });
    } catch (error) {
        return NextResponse.error({ status: 500, statusText: error.message });
    }
    
}