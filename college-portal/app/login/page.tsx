"use client";

import { loginAction } from "@/app/actions/auth"; // We'll create this next
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await loginAction(formData);
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-2">College Portal</h1>
        <p className="text-gray-500 text-center mb-8">Login with your User ID</p>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">User ID</label>
            <input 
              name="user_id"
              type="text" 
              required 
              placeholder="e.g. STU123"
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input 
              name="password"
              type="password" 
              required 
              placeholder="••••••••"
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}