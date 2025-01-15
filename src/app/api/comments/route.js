import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



export async function POST(request){
    const {message,postId} = await request.json();
    try {
        const comments = await prisma.comment.create({
            data : {
                message,
                postId
            }
        })
        return NextResponse.json({
            status: 201,
            message: "Comment created successfully",
            data: comments
        })
    } catch (error) {
        return NextResponse.error({ status: 500, message: error.message });
    }
}


export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    try {
        if (postId) {
            // Fetch comments by postId
            const comments = await prisma.comment.findMany({
                where: {
                    postId: parseInt(postId),
                },
            });

            if (!comments || comments.length === 0) {
                return NextResponse.json({
                    status: 404,
                    message: `No comments found for postId: ${postId}`,
                });
            }

            return NextResponse.json({
                status: 200,
                message: `Comments for postId: ${postId} fetched successfully`,
                data: comments,
            });
        }

        // Fetch all comments if no postId is provided
        const allComments = await prisma.comment.findMany();
        if (!allComments || allComments.length === 0) {
            return NextResponse.json({
                status: 404,
                message: "No comments found",
            });
        }

        return NextResponse.json({
            status: 200,
            message: "All comments fetched successfully",
            data: allComments,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: error.message,
        });
    }
}