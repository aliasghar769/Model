"use client"; // ✅ Add this at the top

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-blue-400 text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/register")}
          className="px-6 py-3 cursor-pointer bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Register
        </button>
        <button
          onClick={() => router.push("/login")}
          className="px-6 cursor-pointer py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
