"use client" // Optional: only if you need client-side interactivity on this page beyond the video player

import React from 'react';
import Link from 'next/link'; // Optional: if you want a link back to home

export default function VideoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-3xl"> {/* Container to control video size */}
        <video 
          className="w-full h-auto" // Make video responsive
          controls 
          autoPlay // Add autoPlay if you want the video to start immediately
          preload="metadata"
          playsInline // Good for mobile browsers
        >
          <source src="/rickroll.mp4" type="video/mp4" />
          Your browser does not support the video tag. Please upgrade your browser.
        </video>
      </div>
      <div className="mt-4">
        <Link href="/" className="text-purple-400 hover:text-purple-300">
          Go back to Home
        </Link>
      </div>
    </main>
  );
}
