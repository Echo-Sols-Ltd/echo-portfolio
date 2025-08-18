"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist.
        </p>

        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
