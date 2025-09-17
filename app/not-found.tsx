"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Error Code */}
        <div className="text-8xl font-bold text-black mb-4">404</div>
        
        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring our innovative technology solutions.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors duration-200"
          >
            <Home size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-50 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/projects" className="text-black hover:text-black/70">
              Our Projects
            </Link>
            <Link href="/about" className="text-black hover:text-black/70">
              About Us
            </Link>
            <Link href="/team" className="text-black hover:text-black/70">
              Our Team
            </Link>
            <Link href="/contact" className="text-black hover:text-black/70">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
