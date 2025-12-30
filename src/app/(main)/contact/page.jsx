"use client";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-8">
      {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-6 text-center">
        Welcome!
      </h1> */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="relative pb-[56.25%] h-0"> 
          {/* 16:9 aspect ratio for video */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/W7RCqRabt8M?si=-7MwgtIpdi4h-DTJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-center text-sm sm:text-base md:text-lg">
        Enjoy your video! 🎬
      </p>

        </div>
  );
}
