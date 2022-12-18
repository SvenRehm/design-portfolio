import { NextApiRequest, NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import getConfig from "next/config"
var nodemailer = require("nodemailer")

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const secretKey = publicRuntimeConfig.mySecret

var transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      //env
      user: process.env.USER,
      pass: process.env.PASS,
   },
})

export default async function contact(
   req: NextApiRequest,
   res: NextApiResponse
) {
   // Get the JWT from the request header
   const authorization = req.headers.authorization

   if (!authorization) {
      return res.status(401).json({ message: "Unauthorized" })
   }
   // Split the authorization header value into its two parts: the token type and the token itself
   const [tokenType, token] = authorization.split(" ")
   // If the token type is not "Bearer", return an unauthorized error
   if (tokenType.toLowerCase() !== "bearer") {
      return res.status(401).json({ message: "Unauthorized" })
   }
   // Verify the JWT using the secret key

   try {
      const decoded = jwt.verify(token, secretKey)

      // Check if the token has expired
   } catch (error) {
      // If the JWT is invalid, return an unauthorized error
      console.log(error)
      return res.status(401).json({ message: "Unauthorized" })
   }

   try {
      // Get the contact data from the request body
      const { name, email, message } = req.body

      // Validate the data
      if (!name || !email || !message) {
         return res.status(400).json({ message: "All fields are required" })
      }

      const mailOptions = {
         from: email, // sender address
         to: process.env.USER, // list of receivers
         subject: "Subject of your email", // Subject line
         html: message + "" + name, // plain text body
      }

      transporter.sendMail(mailOptions, function (err, info) {
         if (err) console.log(err)
         else console.log(info)
      })

      // Return a success response
      return res.status(200).json({ message: "Thank you for your message!" })
   } catch (error) {
      // Return an error response
      return res.status(500).json({ message: error.message })
   }
}
