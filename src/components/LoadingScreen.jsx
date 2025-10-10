// LoadingScreen.jsx
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>

      {/* Optional text */}
      <p className="mt-4 text-blue-500 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
