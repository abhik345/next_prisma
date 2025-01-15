import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import { processBase64Image } from "@/middlewares/processBase64Image";



const prisma = new PrismaClient();


export async function POST(request){
    const {image_url,postId} = await request.json();
    try {
        if(!image_url || !postId){
            return NextResponse.json({
                status : 400,
                message : "Please provide image_url and postId"
            })
        }
        const processedImage = processBase64Image(image_url)
        const newpostImage = await prisma.postimage.create({
          data: {
            image_url: processedImage,
            postId,
          },
        });
        return NextResponse.json({
            status : 201,
            message : "Post image created successfully",
            data : newpostImage
        })
    } catch (error) {
        return NextResponse.error({ status: 500, message: error.message });
    }
}

export async function GET(request) {
    try {
        const postImages = await prisma.postimage.findMany();
        return NextResponse.json({
            status: 200,
            message: "Post images fetched successfully",
            data: postImages,
        });
    } catch (error) {
        return NextResponse.error({ status: 500, message: error.message });
    }
}