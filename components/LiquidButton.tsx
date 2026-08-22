"use client";

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  liquidColor?: string;
}

export default function LiquidButton({
  children,
  onClick,
  className = "",
  style = {},
  type = "button",
  disabled = false,
  liquidColor = "var(--color-primary-red, #c62828)",
}: LiquidButtonProps) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`liquid-wave-btn group relative overflow-hidden ${className}`}
        style={{ ...style, "--liquid-color": liquidColor } as React.CSSProperties & { "--liquid-color": string }}
      >
        {/* Liquid Fill */}
        <span className="liquid-fill" />

        {/* Animated Wave */}
        <span className="liquid-wave">
          <span className="wave wave-one" />
          <span className="wave wave-two" />
        </span>

        {/* Button Content */}
        <span className="liquid-btn-content">{children}</span>
      </button>

      <style jsx>{`
        .liquid-wave-btn {
          position: relative;
          isolation: isolate;
          overflow: hidden;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          padding: 12px 24px;
          border-radius: 999px;
          border: 4px solid rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.08);

          cursor: pointer;
          pointer-events: auto;
          transition:
            border-color 0.4s ease,
            background 0.4s ease;

          font-size: 14px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          white-space: nowrap;
        }

        .liquid-wave-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .liquid-wave-btn:hover:not(:disabled) {
          border-color: rgba(255, 255, 255, 0.65);
          background: rgba(255, 255, 255, 0.12);
        }

        /* =========================================
           LIQUID FILL
        ========================================= */

        .liquid-fill {
          position: absolute;
          z-index: 1;

          left: -10%;
          bottom: -125%;

          width: 120%;
          height: 135%;

          background: var(--liquid-color, var(--color-primary-red, #c62828));
          border-radius: 50% 50% 0 0;

          transform: translate3d(0, 0, 0);

          transition:
            bottom 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .liquid-wave-btn:hover:not(:disabled) .liquid-fill {
          bottom: -10%;
        }

        /* =========================================
           WAVE SURFACE
        ========================================= */

        .liquid-wave {
          position: absolute;
          z-index: 2;

          left: -25%;
          bottom: -30%;

          width: 150%;
          height: 35px;

          opacity: 0;

          transition:
            bottom 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.3s ease;
        }

        .liquid-wave-btn:hover:not(:disabled) .liquid-wave {
          bottom: 63%;
          opacity: 1;
        }

        /* Individual Wave */
        .wave {
          position: absolute;
          width: 100%;
          height: 100%;

          background: var(--liquid-color, var(--color-primary-red, #c62828));
          border-radius: 50%;
        }

        .wave-one {
          left: -4%;
          top: 0;

          animation: liquidWaveOne 2.4s ease-in-out infinite;
        }

        .wave-two {
          left: 8%;
          top: 5px;

          opacity: 0.7;

          animation: liquidWaveTwo 3s ease-in-out infinite;
        }

        /* =========================================
           WAVE ANIMATIONS
        ========================================= */

        @keyframes liquidWaveOne {
          0% {
            transform: translateX(-4%) rotate(-2deg);
          }
          50% {
            transform: translateX(4%) rotate(2deg);
          }
          100% {
            transform: translateX(-4%) rotate(-2deg);
          }
        }

        @keyframes liquidWaveTwo {
          0% {
            transform: translateX(5%) rotate(2deg);
          }
          50% {
            transform: translateX(-5%) rotate(-2deg);
          }
          100% {
            transform: translateX(5%) rotate(2deg);
          }
        }

        /* =========================================
           BUTTON CONTENT
        ========================================= */

        .liquid-btn-content {
          position: relative;
          z-index: 10;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          width: 100%;
          height: 100%;

          color: white;

          font-size: inherit;
          font-weight: inherit;

          letter-spacing: 0.03em;

          pointer-events: none;
        }
      `}</style>
    </>
  );
}
