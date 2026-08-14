'use client';

import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ease-out pointer-events-none"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">

        {/* Animated Spinner */}
        <div className="relative w-20 h-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

          {/* Rotating Gradient Ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-600 border-r-red-500"
            style={{
              animation: 'spin 1.5s linear infinite',
            }}
          />

          {/* Inner Pulsing Circle */}
          <div
            className="absolute inset-2 rounded-full bg-red-100"
            style={{
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />

          {/* Center Logo Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-red-600">P</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Loading Pascom
          </h2>
          <p className="text-sm text-gray-500">
            Preparing your chemical solutions...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
            style={{
              animation: 'progress 2.5s ease-in-out forwards',
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
