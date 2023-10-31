import { connectMongoDB } from "@/util/db";
import User from "@/model/user";




export default async function handler(req, res) {
  if (req.method === 'POST') {

    try {
      // Check if the user with the given email already exists
      
      const { email } = req.body;
        await User.findOne({email})
      console.log("user already exist")

      await connectMongoDB()
    } catch (error) {
      // Handle registration failure and send an error response
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle non-POST requests (e.g., GET requests).
    res.status(405).end(); // Method Not Allowed
  }
}
