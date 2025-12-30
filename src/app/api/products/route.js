import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { title, description, price, image, category } = await req.json();

    if (!title || !price || !image) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Rename variable to 'newProduct'
    const newProduct = await Product.create({
      title,
      description,
      price,
      image,
      category,
    });

    return NextResponse.json(
      { message: "Product created successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// get the products by the api 

export async function  GET(req){
try{

await connectDB();
const products = await Product.find().sort({createdAt : 1});

return NextResponse.json({products})
}catch(error){
console.log(error , "geting products error")
return NextResponse.json({message : "internal server Error || failed to fetch products "})

}



}

