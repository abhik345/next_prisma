import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const id = await params.id;
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id,
      },
    });
    if (!comment) {
      return NextResponse.json({
        status: 404,
        message: "Comment not found",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Comment fetched successfully",
      data: comment,
    });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      statusText: error.message,
    });
  }
}

export async function PUT(request, { params }) {
  const id = await params.id;
  const data = await request.json();
  const { message, postId } = data;
  try {
    const updateComment = await prisma.comment.update({
      where: {
        id,
      },
      data: {
        message,
        postId,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Comment updated successfully",
      data: updateComment,
    });
  } catch (error) {
    return NextResponse.error({ status: 500, statusText: error.message });
  }
}

export async function DELETE(request, { params }) {
  const id = await params.id;
  try {
    await prisma.comment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    return NextResponse.error({
      status: 500,
      message: error.message,
    });
  }
}
