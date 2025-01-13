import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const { title, content, published, authorId } = await request.json();
        // Validation for required fields
        if (!title || !authorId) {
            return NextResponse.json({
                status: 400,
                message: "Title and authorId are required",
            });
        }
        const newPost = await prisma.post.create({
            data: {
                title,
                content: content ?? null, 
                published: published ?? false,
                slug : title.replace(/\s+/g, '-').toLowerCase(),
                authorId,
            },
        });

        return NextResponse.json({
            status: 201,
            message: "Post created successfully",
            data: newPost,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Failed to create post",
            error: error.message,
        });
    }
}

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                comment: true,
            },
        });

        return NextResponse.json({
            status: 200,
            message: "Posts fetched successfully",
            data: posts,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Failed to fetch posts",
            error: error.message,
        });
    }
}
