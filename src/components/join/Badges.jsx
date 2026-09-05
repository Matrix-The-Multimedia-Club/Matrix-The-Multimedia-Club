import React from "react";

// const BadgeProps = {
//   className: "",
//   onClick: undefined,
//   interactive: true,
// };

/**
 * TECHNICAL Badge
 */
export const TechnicalBadgeSvg = ({
  className = "",
  onClick,
  interactive = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative select-none ${
        interactive ? "cursor-pointer doodle-card-hover" : ""
      } ${className}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Technical Department Badge"
    >
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        {/* Sticker background */}
        <path
          d="M24 18 C12 22 8 36 8 52 L8 148 C7 165 16 182 32 186 C65 190 195 188 250 186 C268 184 274 168 274 150 L273 48 C273 30 262 16 244 14 C190 11 75 12 24 18 Z"
          fill="#cbe7e7"
          stroke="#1a1a1d"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        <path
          d="M26 24 C18 27 15 38 15 50 L15 145 C15 158 22 173 34 176 C65 180 190 178 244 176 C258 174 263 162 263 148 L262 48 C262 34 254 22 238 21 C188 18 78 19 26 24 Z"
          stroke="#a3d5d5"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* Illustration */}
        <g transform="translate(18, 32)">
          {/* Code Editor */}
          <g transform="translate(12, 10)">
            <rect
              x="0"
              y="0"
              width="84"
              height="66"
              rx="6"
              fill="#2d3748"
              stroke="#1a202c"
              strokeWidth="2.5"
            />

            <rect
              x="0"
              y="0"
              width="84"
              height="14"
              rx="5"
              fill="#1a202c"
            />

            <circle cx="9" cy="7" r="2.5" fill="#f56565" />
            <circle cx="17" cy="7" r="2.5" fill="#ecc94b" />
            <circle cx="25" cy="7" r="2.5" fill="#48bb78" />

            <text
              x="42"
              y="42"
              fill="#38bdf8"
              fontSize="22"
              fontWeight="900"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {"</>"}
            </text>

            <line
              x1="12"
              y1="52"
              x2="34"
              y2="52"
              stroke="#94a3b8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <line
              x1="40"
              y1="52"
              x2="68"
              y2="52"
              stroke="#e2e8f0"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <line
              x1="12"
              y1="58"
              x2="48"
              y2="58"
              stroke="#a78bfa"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Gears */}
          <g transform="translate(98, 14)">
            <g transform="translate(18, 20)">
              <circle
                cx="0"
                cy="0"
                r="17"
                fill="#718096"
                stroke="#2d3748"
                strokeWidth="2.5"
              />

              {[-60, -30, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270].map(
                (deg) => (
                  <rect
                    key={deg}
                    x="-3"
                    y="-22"
                    width="6"
                    height="7"
                    rx="1.5"
                    fill="#718096"
                    stroke="#2d3748"
                    strokeWidth="2"
                    transform={`rotate(${deg})`}
                  />
                )
              )}

              <circle
                cx="0"
                cy="0"
                r="6"
                fill="#cbe7e7"
                stroke="#2d3748"
                strokeWidth="2"
              />
            </g>

            <g transform="translate(38, 44)">
              <circle
                cx="0"
                cy="0"
                r="12"
                fill="#a0aec0"
                stroke="#2d3748"
                strokeWidth="2"
              />

              {[-45, 0, 45, 90, 135, 180, 225, 270].map((deg) => (
                <rect
                  key={deg}
                  x="-2.5"
                  y="-16"
                  width="5"
                  height="6"
                  rx="1"
                  fill="#a0aec0"
                  stroke="#2d3748"
                  strokeWidth="1.5"
                  transform={`rotate(${deg})`}
                />
              ))}

              <circle
                cx="0"
                cy="0"
                r="4"
                fill="#cbe7e7"
                stroke="#2d3748"
                strokeWidth="2"
              />
            </g>
          </g>

          {/* CPU */}
          <g transform="translate(162, 16)">
            <rect
              x="10"
              y="10"
              width="46"
              height="46"
              rx="4"
              fill="#48bb78"
              stroke="#1a202c"
              strokeWidth="2.5"
            />

            <rect
              x="20"
              y="20"
              width="26"
              height="26"
              rx="2"
              fill="#2f855a"
              stroke="#1a202c"
              strokeWidth="2"
            />

            <text
              x="33"
              y="37"
              fill="#fef08a"
              fontSize="10"
              fontWeight="bold"
              fontFamily="monospace"
              textAnchor="middle"
            >
              CPU
            </text>

            {/* CPU pins */}
            {[18, 28, 38, 48].map((x) => (
              <React.Fragment key={`top-${x}`}>
                <line
                  x1={x}
                  y1="4"
                  x2={x}
                  y2="10"
                  stroke="#d69e2e"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1={x}
                  y1="56"
                  x2={x}
                  y2="62"
                  stroke="#d69e2e"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </React.Fragment>
            ))}

            {[18, 28, 38, 48].map((y) => (
              <React.Fragment key={`side-${y}`}>
                <line
                  x1="4"
                  y1={y}
                  x2="10"
                  y2={y}
                  stroke="#d69e2e"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="56"
                  y1={y}
                  x2="62"
                  y2={y}
                  stroke="#d69e2e"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </React.Fragment>
            ))}

            <circle cx="68" cy="18" r="2.5" fill="#38bdf8" />
            <line
              x1="62"
              y1="18"
              x2="72"
              y2="18"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
          </g>
        </g>

        {/* Label */}
        <text
          x="140"
          y="156"
          textAnchor="middle"
          fill="#111827"
          fontSize="24"
          fontWeight="900"
          letterSpacing="0.05em"
          style={{
            fontFamily: "'Architects Daughter', 'Permanent Marker', sans-serif",
          }}
        >
          TECHNICAL
        </text>
      </svg>
    </div>
  );
};

/**
 * DESIGN Badge
 */
export const DesignBadgeSvg = ({
  className = "",
  onClick,
  interactive = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative select-none ${
        interactive ? "cursor-pointer doodle-card-hover" : ""
      } ${className}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Design Department Badge"
    >
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        <path
          d="M22 19 C12 25 7 40 8 56 L9 146 C8 164 18 181 36 185 C70 188 198 189 248 185 C266 182 272 166 272 148 L271 50 C270 32 259 18 241 16 C186 13 72 14 22 19 Z"
          fill="#f9cea6"
          stroke="#1a1a1d"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        <path
          d="M26 26 C18 30 15 42 15 54 L16 142 C16 156 24 171 38 174 C72 178 194 177 242 174 C256 172 261 160 261 146 L260 52 C260 38 251 24 236 23 C184 20 74 21 26 26 Z"
          stroke="#e89c67"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />

        <g transform="translate(18, 30)">
          {/* Palette */}
          <g transform="translate(18, 8)">
            <path
              d="M38 10 C62 4 86 18 86 42 C86 64 68 76 46 76 C24 76 10 60 10 40 C10 22 22 14 38 10 Z"
              fill="#e2b17a"
              stroke="#1a1a1d"
              strokeWidth="2.5"
            />

            <circle
              cx="28"
              cy="54"
              r="7"
              fill="#f9cea6"
              stroke="#1a1a1d"
              strokeWidth="2"
            />

            <circle cx="44" cy="22" r="5.5" fill="#ef4444" />
            <circle cx="62" cy="28" r="5.5" fill="#3b82f6" />
            <circle cx="72" cy="45" r="5.5" fill="#facc15" />
            <circle cx="56" cy="60" r="5.5" fill="#10b981" />

            {/* Brush */}
            <g transform="translate(48, 8) rotate(35)">
              <path
                d="M0 0 L4 0 L3 46 L1 46 Z"
                fill="#b45309"
                stroke="#1a1a1d"
                strokeWidth="1.5"
              />
              <rect
                x="0"
                y="46"
                width="4"
                height="8"
                fill="#cbd5e1"
                stroke="#1a1a1d"
                strokeWidth="1"
              />
              <path
                d="M0 54 C0 62 4 62 4 54 Z"
                fill="#ef4444"
                stroke="#1a1a1d"
                strokeWidth="1"
              />
            </g>
          </g>

          {/* Tools */}
          <g transform="translate(130, 10)">
            {/* Green marker */}
            <g transform="translate(48, 12) rotate(42)">
              <rect
                x="0"
                y="0"
                width="16"
                height="76"
                rx="4"
                fill="#4ade80"
                stroke="#1a1a1d"
                strokeWidth="2.5"
              />

              <rect
                x="0"
                y="52"
                width="16"
                height="24"
                rx="3"
                fill="#22c55e"
                stroke="#1a1a1d"
                strokeWidth="1.5"
              />

              <polygon
                points="2,0 14,0 10,-12 6,-12"
                fill="#15803d"
                stroke="#1a1a1d"
                strokeWidth="1.5"
              />
            </g>

            {/* Pencil */}
            <g transform="translate(10, 20) rotate(-38)">
              <rect
                x="0"
                y="16"
                width="14"
                height="66"
                fill="#facc15"
                stroke="#1a1a1d"
                strokeWidth="2.5"
              />

              <line
                x1="5"
                y1="16"
                x2="5"
                y2="82"
                stroke="#ca8a04"
                strokeWidth="1.5"
              />

              <line
                x1="9"
                y1="16"
                x2="9"
                y2="82"
                stroke="#ca8a04"
                strokeWidth="1.5"
              />

              <polygon
                points="0,16 14,16 7,0"
                fill="#fde68a"
                stroke="#1a1a1d"
                strokeWidth="2"
              />

              <polygon points="5,5 9,5 7,0" fill="#1e293b" />

              <rect
                x="0"
                y="82"
                width="14"
                height="10"
                fill="#cbd5e1"
                stroke="#1a1a1d"
                strokeWidth="1.5"
              />

              <path
                d="M0 92 C0 98 14 98 14 92 Z"
                fill="#f472b6"
                stroke="#1a1a1d"
                strokeWidth="2"
              />
            </g>
          </g>
        </g>

        <text
          x="140"
          y="156"
          textAnchor="middle"
          fill="#111827"
          fontSize="24"
          fontWeight="900"
          letterSpacing="0.05em"
          style={{
            fontFamily: "'Architects Daughter', 'Permanent Marker', sans-serif",
          }}
        >
          DESIGN
        </text>
      </svg>
    </div>
  );
};

/**
 * PR & OUTREACH Badge
 */
export const PrOutreachBadgeSvg = ({
  className = "",
  onClick,
  interactive = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative select-none ${
        interactive ? "cursor-pointer doodle-card-hover" : ""
      } ${className}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="PR and Outreach Department Badge"
    >
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        <path
          d="M24 18 C13 24 8 38 9 54 L9 146 C8 164 17 181 35 185 C69 188 196 189 248 185 C266 182 272 165 272 148 L271 50 C270 32 260 17 242 15 C186 12 73 13 24 18 Z"
          fill="#fbe9c4"
          stroke="#1a1a1d"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        <path
          d="M28 25 C20 29 16 41 16 53 L16 142 C16 156 24 170 38 174 C72 177 192 177 242 174 C256 171 261 159 261 146 L260 52 C260 38 252 23 237 22 C184 19 75 20 28 25 Z"
          stroke="#dfc086"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />

        <g transform="translate(12, 30)">
          {/* Megaphone */}
          <g transform="translate(10, 10)">
            <path
              d="M24 38 L68 18 L72 58 L24 48 Z"
              fill="#ef4444"
              stroke="#1a1a1d"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            <ellipse
              cx="71"
              cy="38"
              rx="6"
              ry="21"
              fill="#facc15"
              stroke="#1a1a1d"
              strokeWidth="2.5"
            />

            <ellipse cx="71" cy="38" rx="2" ry="14" fill="#ca8a04" />

            <rect
              x="14"
              y="36"
              width="10"
              height="14"
              rx="2"
              fill="#facc15"
              stroke="#1a1a1d"
              strokeWidth="2"
            />

            <path
              d="M14 39 C8 39 6 42 6 44 C6 46 8 49 14 49 Z"
              fill="#94a3b8"
              stroke="#1a1a1d"
              strokeWidth="2"
            />

            <path
              d="M32 46 L26 68 C25 72 29 76 33 74 L37 72 L42 46 Z"
              fill="#d97706"
              stroke="#1a1a1d"
              strokeWidth="2.5"
            />

            <path
              d="M82 28 C87 34 87 44 82 50"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path
              d="M89 22 C96 32 96 48 89 58"
              stroke="#d97706"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Network */}
          <g transform="translate(112, 12)">
            <line
              x1="30"
              y1="18"
              x2="68"
              y2="28"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="3 2"
            />

            <line
              x1="30"
              y1="18"
              x2="22"
              y2="54"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="3 2"
            />

            <line
              x1="68"
              y1="28"
              x2="88"
              y2="58"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="3 2"
            />

            <line
              x1="22"
              y1="54"
              x2="60"
              y2="60"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="3 2"
            />

            <line
              x1="60"
              y1="60"
              x2="88"
              y2="58"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="3 2"
            />

            <line
              x1="30"
              y1="18"
              x2="60"
              y2="60"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />

            {/* People nodes */}
            {[
              { x: 30, y: 18, color: "#38bdf8" },
              { x: 68, y: 28, color: "#fb923c" },
              { x: 22, y: 54, color: "#4ade80" },
              { x: 60, y: 60, color: "#a78bfa" },
            ].map((person, index) => (
              <g
                key={index}
                transform={`translate(${person.x}, ${person.y})`}
              >
                <circle
                  cx="0"
                  cy="0"
                  r={index === 2 ? 9 : 10}
                  fill={person.color}
                  stroke="#1a1a1d"
                  strokeWidth="2"
                />

                <circle
                  cx="0"
                  cy="-2"
                  r={index === 2 ? 3 : 3.5}
                  fill="#ffffff"
                />

                <path
                  d={
                    index === 2
                      ? "M-5 6 C-5 3 5 3 5 6 Z"
                      : "M-6 7 C-6 3 6 3 6 7 Z"
                  }
                  fill="#ffffff"
                />
              </g>
            ))}

            {/* Envelopes */}
            {[14, 52].map((y) => (
              <g key={y} transform={`translate(100, ${y})`}>
                <rect
                  x="0"
                  y="0"
                  width="22"
                  height="15"
                  rx="2"
                  fill="#ffffff"
                  stroke="#1a1a1d"
                  strokeWidth="1.5"
                />

                <polyline
                  points="0,0 11,8 22,0"
                  stroke="#1a1a1d"
                  strokeWidth="1.5"
                  fill="none"
                />
              </g>
            ))}
          </g>
        </g>

        <text
          x="140"
          y="156"
          textAnchor="middle"
          fill="#111827"
          fontSize="22"
          fontWeight="900"
          letterSpacing="0.04em"
          style={{
            fontFamily: "'Architects Daughter', 'Permanent Marker', sans-serif",
          }}
        >
          PR &amp; OUTREACH
        </text>
      </svg>
    </div>
  );
};

/**
 * SOCIAL MEDIA Badge
 */
export const SocialMediaBadgeSvg = ({
  className = "",
  onClick,
  interactive = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative select-none ${
        interactive ? "cursor-pointer doodle-card-hover" : ""
      } ${className}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Social Media Department Badge"
    >
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        <path
          d="M24 19 C13 25 8 39 9 55 L9 146 C8 164 17 181 35 185 C69 188 196 189 248 185 C266 182 272 165 272 148 L271 50 C270 32 260 17 242 15 C186 12 73 13 24 19 Z"
          fill="#d4dcf7"
          stroke="#1a1a1d"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        <path
          d="M28 26 C20 30 16 42 16 54 L16 142 C16 156 24 170 38 174 C72 177 192 177 242 174 C256 171 261 159 261 146 L260 52 C260 38 252 23 237 22 C184 19 75 20 28 26 Z"
          stroke="#a3b4e6"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />

        <g transform="translate(56, 26)">
          {/* Smartphone */}
          <g transform="translate(60, 6) rotate(6)">
            <rect
              x="0"
              y="0"
              width="46"
              height="78"
              rx="10"
              fill="#334155"
              stroke="#1a1a1d"
              strokeWidth="2.5"
            />

            <rect
              x="4"
              y="8"
              width="38"
              height="60"
              rx="3"
              fill="#bae6fd"
              stroke="#0284c7"
              strokeWidth="1"
            />

            <line
              x1="18"
              y1="4"
              x2="28"
              y2="4"
              stroke="#64748b"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <line
              x1="16"
              y1="72"
              x2="30"
              y2="72"
              stroke="#64748b"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M6 10 L30 10 L8 50 Z"
              fill="rgba(255,255,255,0.3)"
            />
          </g>

          {/* Facebook */}
          <g transform="translate(18, 14)">
            <rect
              x="0"
              y="0"
              width="22"
              height="22"
              rx="5"
              fill="#f87171"
              stroke="#1a1a1d"
              strokeWidth="2"
            />

            <text
              x="11"
              y="17"
              fill="#ffffff"
              fontSize="16"
              fontWeight="bold"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              f
            </text>
          </g>

          {/* Snapchat */}
          <g transform="translate(14, 46)">
            <rect
              x="0"
              y="0"
              width="22"
              height="22"
              rx="5"
              fill="#fde047"
              stroke="#1a1a1d"
              strokeWidth="2"
            />

            <path
              d="M6 16 C6 10 16 10 16 16 C16 17 14 18 11 17 C8 18 6 17 6 16 Z"
              fill="#ffffff"
              stroke="#1a1a1d"
              strokeWidth="1.2"
            />
          </g>

          {/* Heart chat */}
          <g transform="translate(98, 12)">
            <path
              d="M4 0 L32 0 C34 0 36 2 36 4 L36 18 C36 20 34 22 32 22 L14 22 L8 28 L8 22 L4 22 C2 22 0 20 0 18 L0 4 C0 2 2 0 4 0 Z"
              fill="#fb7185"
              stroke="#1a1a1d"
              strokeWidth="2"
            />

            <path
              d="M18 15 C18 15 13 11 13 8 C13 6 15 5 16.5 6.5 L18 8 L19.5 6.5 C21 5 23 6 23 8 C23 11 18 15 18 15 Z"
              fill="#ffffff"
            />
          </g>

          {/* Green notification */}
          <g transform="translate(104, 52)">
            <rect
              x="0"
              y="0"
              width="22"
              height="18"
              rx="4"
              fill="#4ade80"
              stroke="#1a1a1d"
              strokeWidth="2"
            />

            <polygon
              points="4,18 8,18 2,23"
              fill="#4ade80"
              stroke="#1a1a1d"
              strokeWidth="1.5"
            />

            <path
              d="M11 13 C11 13 7 10 7 7.5 C7 5.8 8.5 5 9.8 6.2 L11 7.5 L12.2 6.2 C13.5 5 15 5.8 15 7.5 C15 10 11 13 11 13 Z"
              fill="#ffffff"
            />
          </g>
        </g>

        <text
          x="140"
          y="150"
          textAnchor="middle"
          fill="#111827"
          fontSize="22"
          fontWeight="900"
          letterSpacing="0.04em"
          style={{
            fontFamily: "'Architects Daughter', 'Permanent Marker', sans-serif",
          }}
        >
          SOCIAL
        </text>

        <text
          x="140"
          y="172"
          textAnchor="middle"
          fill="#111827"
          fontSize="22"
          fontWeight="900"
          letterSpacing="0.04em"
          style={{
            fontFamily: "'Architects Daughter', 'Permanent Marker', sans-serif",
          }}
        >
          MEDIA
        </text>
      </svg>
    </div>
  );
};

/**
 * EVENT Badge
 */
export const EventBadgeSvg = ({
  className = "",
  onClick,
  interactive = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative select-none ${
        interactive ? "cursor-pointer doodle-card-hover" : ""
      } ${className}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Event Department Badge"
    >
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        <path
          d="M24 18 C12 22 8 36 8 52 L8 148 C7 165 16 182 32 186 C65 190 195 188 250 186 C268 184 274 168 274 150 L273 48 C273 30 262 16 244 14 C190 11 75 12 24 18 Z"
          fill="#fde68a"
          stroke="#1a1a1d"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        <path
          d="M26 24 C18 27 15 38 15 50 L15 145 C15 158 22 173 34 176 C65 180 190 178 244 176 C258 174 263 162 263 148 L262 48 C262 34 254 22 238 21 C188 18 78 19 26 24 Z"
          stroke="#ca8a04"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* Illustration */}
        <g transform="translate(36, 42)">
          {/* Calendar */}
          <g transform="translate(12, 10)">
            <rect
              x="0"
              y="0"
              width="50"
              height="44"
              rx="4"
              fill="#ffffff"
              stroke="#1a1a1d"
              strokeWidth="2"
            />
            <rect
              x="0"
              y="0"
              width="50"
              height="12"
              rx="3"
              fill="#ef4444"
              stroke="#1a1a1d"
              strokeWidth="1.5"
            />
            {/* Grid dots */}
            {[10, 20, 30, 40].map((cx) => (
              <React.Fragment key={cx}>
                <circle cx={cx} cy="20" r="2" fill="#64748b" />
                <circle cx={cx} cy="28" r="2" fill="#64748b" />
                <circle cx={cx} cy="36" r="2" fill="#64748b" />
              </React.Fragment>
            ))}
          </g>

          {/* Stage & Lights */}
          <g transform="translate(120, 10)">
            {/* Stage lights structure */}
            <path
              d="M10 0 L70 0 L60 12 L20 12 Z"
              fill="#475569"
              stroke="#1a1a1d"
              strokeWidth="1.5"
            />
            {/* Spotlights */}
            <polygon points="20,12 10,48 35,48" fill="rgba(250, 204, 21, 0.35)" />
            <polygon points="60,12 45,48 70,48" fill="rgba(250, 204, 21, 0.35)" />
            {/* Stage Floor & Curtains */}
            <rect
              x="5"
              y="44"
              width="70"
              height="10"
              fill="#b45309"
              stroke="#1a1a1d"
              strokeWidth="2"
            />
            <path d="M5 14 Q 18 30, 5 44" fill="#dc2626" stroke="#1a1a1d" strokeWidth="1.5" />
            <path d="M75 14 Q 62 30, 75 44" fill="#dc2626" stroke="#1a1a1d" strokeWidth="1.5" />
          </g>

          {/* Ticket Stub */}
          <g transform="translate(30, 38) rotate(-10)">
            <rect
              x="0"
              y="0"
              width="64"
              height="28"
              rx="3"
              fill="#fb923c"
              stroke="#1a1a1d"
              strokeWidth="2"
            />
            <line
              x1="46"
              y1="0"
              x2="46"
              y2="28"
              stroke="#1a1a1d"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            <text
              x="22"
              y="18"
              fill="#1e293b"
              fontSize="10"
              fontWeight="bold"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              TICKET
            </text>
          </g>
        </g>

        {/* Label */}
        <text
          x="140"
          y="156"
          textAnchor="middle"
          fill="#111827"
          fontSize="24"
          fontWeight="900"
          letterSpacing="0.05em"
          style={{
            fontFamily: "'Architects Daughter', 'Permanent Marker', sans-serif",
          }}
        >
          EVENT
        </text>
      </svg>
    </div>
  );
};

/**
 * CONTENT Badge
 */
export const ContentBadgeSvg = ({
  className = "",
  onClick,
  interactive = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative select-none ${
        interactive ? "cursor-pointer doodle-card-hover" : ""
      } ${className}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Content Department Badge"
    >
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        <path
          d="M22 19 C12 25 7 40 8 56 L9 146 C8 164 18 181 36 185 C70 188 198 189 248 185 C266 182 272 166 272 148 L271 50 C270 32 259 18 241 16 C186 13 72 14 22 19 Z"
          fill="#fbcfe8"
          stroke="#1a1a1d"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        <path
          d="M26 26 C18 30 15 42 15 54 L16 142 C16 156 24 171 38 174 C72 178 194 177 242 174 C256 172 261 160 261 146 L260 52 C260 38 251 24 236 23 C184 20 74 21 26 26 Z"
          stroke="#f472b6"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* Illustration */}
        <g transform="translate(36, 40)">
          {/* Typewriter */}
          <g transform="translate(12, 8)">
            {/* Paper sheet */}
            <rect
              x="12"
              y="0"
              width="36"
              height="30"
              fill="#ffffff"
              stroke="#1a1a1d"
              strokeWidth="1.5"
            />
            <line x1="16" y1="8" x2="40" y2="8" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="16" y1="14" x2="40" y2="14" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="16" y1="20" x2="32" y2="20" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Typewriter Base */}
            <path
              d="M4 24 L56 24 L60 54 L0 54 Z"
              fill="#0d9488"
              stroke="#1a1a1d"
              strokeWidth="2.5"
            />
            {/* Key buttons */}
            {[10, 22, 34, 46].map((x) => (
              <circle key={x} cx={x} cy="42" r="3" fill="#cbd5e1" stroke="#1a1a1d" strokeWidth="1" />
            ))}
          </g>

          {/* Pen */}
          <g transform="translate(120, 8) rotate(35)">
            <rect
              x="0"
              y="0"
              width="10"
              height="55"
              rx="2"
              fill="#3b82f6"
              stroke="#1a1a1d"
              strokeWidth="2"
            />
            <polygon points="0,55 10,55 5,68" fill="#cbd5e1" stroke="#1a1a1d" strokeWidth="1.5" />
            <polygon points="3,63 7,63 5,68" fill="#1e293b" />
          </g>

          {/* Video Camera / Reel */}
          <g transform="translate(140, 30)">
            <rect
              x="0"
              y="0"
              width="36"
              height="26"
              rx="4"
              fill="#334155"
              stroke="#1a1a1d"
              strokeWidth="2"
            />
            <polygon points="36,6 52,0 52,26 36,20" fill="#475569" stroke="#1a1a1d" strokeWidth="1.5" />
            <circle cx="10" cy="-6" r="7" fill="#64748b" stroke="#1a1a1d" strokeWidth="1.5" />
            <circle cx="26" cy="-6" r="7" fill="#64748b" stroke="#1a1a1d" strokeWidth="1.5" />
          </g>
        </g>

        {/* Label */}
        <text
          x="140"
          y="156"
          textAnchor="middle"
          fill="#111827"
          fontSize="24"
          fontWeight="900"
          letterSpacing="0.05em"
          style={{
            fontFamily: "'Architects Daughter', 'Permanent Marker', sans-serif",
          }}
        >
          CONTENT
        </text>
      </svg>
    </div>
  );
};

/**
 * FINANCE Badge
 */
export const FinanceBadgeSvg = ({
  className = "",
  onClick,
  interactive = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative select-none ${
        interactive ? "cursor-pointer doodle-card-hover" : ""
      } ${className}`}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Finance Department Badge"
    >
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-lg"
      >
        <path
          d="M24 18 C12 22 8 36 8 52 L8 148 C7 165 16 182 32 186 C65 190 195 188 250 186 C268 184 274 168 274 150 L273 48 C273 30 262 16 244 14 C190 11 75 12 24 18 Z"
          fill="#bbf7d0"
          stroke="#1a1a1d"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        <path
          d="M26 24 C18 27 15 38 15 50 L15 145 C15 158 22 173 34 176 C65 180 190 178 244 176 C258 174 263 162 263 148 L262 48 C262 34 254 22 238 21 C188 18 78 19 26 24 Z"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* Illustration */}
        <g transform="translate(38, 30)">
          {/* Money Bag */}
          <g transform="translate(10, 10)">
            <path
              d="M24 0 C18 0 16 8 18 14 C10 18 2 28 2 48 C2 66 16 72 32 72 C48 72 62 66 62 48 C62 28 54 18 46 14 C48 8 46 0 40 0 Z"
              fill="#d97706"
              stroke="#1a1a1d"
              strokeWidth="2.5"
            />
            {/* Bag tie */}
            <rect x="18" y="14" width="28" height="6" rx="3" fill="#dc2626" />
            <text
              x="32"
              y="52"
              fill="#16a34a"
              fontSize="24"
              fontWeight="900"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              $
            </text>
          </g>

          {/* Stack of Coins */}
          <g transform="translate(90, 20)">
            {[38, 28, 18, 8, -2].map((y, i) => (
              <ellipse
                key={i}
                cx="20"
                cy={y}
                rx="18"
                ry="7"
                fill="#facc15"
                stroke="#1a1a1d"
                strokeWidth="2"
              />
            ))}
          </g>

          {/* Calculator */}
          <g transform="translate(145, 14)">
            <rect
              x="0"
              y="0"
              width="44"
              height="58"
              rx="4"
              fill="#334155"
              stroke="#1a1a1d"
              strokeWidth="2.5"
            />
            {/* Screen */}
            <rect
              x="6"
              y="6"
              width="32"
              height="12"
              rx="2"
              fill="#94a3b8"
              stroke="#1a1a1d"
              strokeWidth="1.5"
            />
            {/* Keypad */}
            {[24, 34, 44].map((y) => (
              <React.Fragment key={y}>
                <rect x="6" y={y} width="8" height="6" rx="1" fill="#cbd5e1" />
                <rect x="18" y={y} width="8" height="6" rx="1" fill="#cbd5e1" />
                <rect x="30" y={y} width="8" height="6" rx="1" fill="#f97316" />
              </React.Fragment>
            ))}
          </g>
        </g>

        {/* Label */}
        <text
          x="140"
          y="156"
          textAnchor="middle"
          fill="#111827"
          fontSize="24"
          fontWeight="900"
          letterSpacing="0.05em"
          style={{
            fontFamily: "'Architects Daughter', 'Permanent Marker', sans-serif",
          }}
        >
          FINANCE
        </text>
      </svg>
    </div>
  );
};
