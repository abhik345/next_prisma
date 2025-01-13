import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const { slug } = await params;
    try {
        const post = await prisma.post.findUnique({
            where: {
                slug: slug,
            },
            include : {
                author : true,
                comment : true
            }
        });
        if (!post) {
            return NextResponse.json({
                status: 404,
                message: "Post not found",
            }, { status: 404 });
        }
        return NextResponse.json({
            status: 200,
            message: "Post fetched successfully",
            data: post,
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message,
        }, { status: 500 });
    }
}


export async function PUT(request, { params }) {
    const { slug } = await params; 
    const data = await request.json(); 

    try {
        const updatedSlug = data.title
            ? data.title.replace(/\s+/g, '-').toLowerCase()
            : undefined; 

        const updatePost = await prisma.post.update({
            where: {
                slug: slug, 
            },
            data: {
                title: data.title || undefined, 
                content: data.content || undefined, 
                published: data.published !== undefined ? data.published : undefined, 
                slug: updatedSlug,
            },
        });

        return NextResponse.json({
            status: 200,
            message: "Post updated successfully",
            data: updatePost, 
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message,
        }, { status: 500 });
    }
}


export async function DELETE(request,{params}) {
    try {
        const {slug} = await params
        await prisma.post.delete({
            where : {
                slug : slug
            }
        })
        return NextResponse.json({
            status: 200,
            message: "Post deleted successfully"
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message
        })
    }
    
}
