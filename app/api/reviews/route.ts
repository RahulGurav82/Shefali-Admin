import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Review from "@/lib/models/Review";

export async function POST(req: Request) {
  try {
    const { productId, userId, rating, comment, userName } = await req.json();
    await connectToDB();
    
    const review = await Review.create({
      productId,
      userId,
      rating,
      comment,
      userName
    });

    return NextResponse.json({ message: "Review added successfully", review });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add review" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const productId = url.searchParams.get("productId");
    
    await connectToDB();
    
    const reviews = await Review.find({ productId }).sort({ createdAt: -1 });
    
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}