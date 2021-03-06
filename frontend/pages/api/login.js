import React from "react"
import { API_URL } from "@/config/index"
import cookie from "cookie"

async function Login({ req, res }) {
  if (req.method === "POST") {
    const { identifier, password } = req.body

    const strapiRes = await fetch(`${API_URL}/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const data = await strapiRes.json()

    if (strapiRes.ok) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 24 * 7 * 60 * 60, // 1 week
          path: "/",
          secure: process.env.NODE_ENV !== "development",
        })
      )
      res.status(200).json({ user: data.user })
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}

export default Login
