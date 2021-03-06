import { createContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { API_URL, NEXT_URL } from "@/config/index"

const AppContext = createContext()

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => isUserLoggedIn, [])
  // Login user
  const loginUser = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const data = await res.json()
    if (res.ok) {
      setUser(data.user)
      router.push("/")
    } else {
      setError(data.message)
      setError(null)
    }
  }

  // Logout user
  const logoutUser = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push('/');
    }
  }

  // Register user
  const registerUser = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      router.push("/");
    } else {
      setError(data.message);
      setError(null);
    }
  }

  // Check if user is logged in
  const isUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`)
    const data = await res.json()
    if (res.ok) {
      setUser(data.user)
    } else {
      setUser(null)
    }
  }

  return (
      <AppContext.Provider
          value={{ registerUser, loginUser, logoutUser, user, error }}
      >
        {children}
      </AppContext.Provider>
  )
}

export default AppContext
