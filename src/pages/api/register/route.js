"use client"
import { connectMongoDB } from "@/util/db";
import User from "@/model/user"

export default async function handler(req, res) {
  await connectMongoDB()
  const { name, email, password } = req.body;
  console.log(name, email, password)
  try {
    
  } catch (error) {
    
    
  }

 

      
}
