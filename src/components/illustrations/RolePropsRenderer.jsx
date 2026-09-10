export const RolePropsRenderer = ({ role }) => {
  const renderProps = () => {
    switch (role) {
    case 'technical':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Terminal window */}
          <div className="absolute top-5 ml-5 left-2 w-16 h-14">
            <svg viewBox="0 0 56 48" fill="none" className="w-full h-full drop-shadow-sm">
              <rect x="2" y="2" width="52" height="44" rx="7" fill="#202A34" stroke="#161A1D" strokeWidth="3" />
              <rect x="2" y="2" width="52" height="12" rx="6" fill="#151C23" stroke="#161A1D" strokeWidth="2.5" />
              <circle cx="9" cy="8" r="2" fill="#E05D5D" />
              <circle cx="15" cy="8" r="2" fill="#E5AA38" />
              <circle cx="21" cy="8" r="2" fill="#5DC48F" />
              {/* Terminal Code </> */}
              <path d="M16 28L10 32L16 36" stroke="#4FD1C5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23 40L29 24" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M36 28L42 32L36 36" stroke="#4FD1C5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Top-Right: Gears + Circuit lines */}
          <div className="absolute top-1 right-1 w-20 h-22 mt-4 mr-2">
            <svg viewBox="0 0 64 80" fill="none" className="w-full h-full">
              {/* Large Gear */}
              <g transform="translate(32, 22) ">
                <circle cx="0" cy="0" r="14" fill="#8898A6" stroke="#161A1D" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="6" fill="#93C4B8" stroke="#161A1D" strokeWidth="2" />
                {/* Teeth */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <rect
                    key={i}
                    x="-3"
                    y="-18"
                    width="6"
                    height="6"
                    rx="1"
                    fill="#8898A6"
                    stroke="#161A1D"
                    strokeWidth="2"
                    transform={`rotate(${angle})`}
                  />
                ))}
              </g>
              {/* Circuit tracks */}
              <path d="M48 38V55H36V70" stroke="#161A1D" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="36" cy="70" r="3" fill="#93C4B8" stroke="#161A1D" strokeWidth="2" />
              <path d="M55 42V65" stroke="#161A1D" strokeWidth="2" strokeLinecap="round" />
              <circle cx="55" cy="65" r="2.5" fill="#4FD1C5" stroke="#161A1D" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Mid-Left: Gear */}
          <div className="absolute top-[84px] left-1.5 w-9 h-9 mt-8 ml-4">
            <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
              <g transform="translate(14, 14)">
                <circle cx="0" cy="0" r="8" fill="#6B7C8E" stroke="#161A1D" strokeWidth="2" />
                <circle cx="0" cy="0" r="3.5" fill="#93C4B8" stroke="#161A1D" strokeWidth="1.5" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <rect
                    key={i}
                    x="-2"
                    y="-11"
                    width="4"
                    height="4"
                    fill="#6B7C8E"
                    stroke="#161A1D"
                    strokeWidth="1.5"
                    transform={`rotate(${angle})`}
                  />
                ))}
              </g>
            </svg>
          </div>

          {/* Mid-Left: Circuit board traces */}
          <div className="absolute top-12 left-1 w-16 h-16 mt-39 ml-4">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              <path d="M6 18H24V36H12V50" stroke="#161A1D" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="6" cy="18" r="3" fill="#4FD1C5" stroke="#161A1D" strokeWidth="2" />
              <circle cx="12" cy="50" r="3" fill="#93C4B8" stroke="#161A1D" strokeWidth="2" />
              <path d="M18 36H40" stroke="#161A1D" strokeWidth="2" strokeLinecap="round" />
              <circle cx="40" cy="36" r="2.5" fill="#4FD1C5" stroke="#161A1D" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Mid-Right: Flexible circuit ribbon */}
          <div className="absolute top-14 right-1 w-14 h-18 mt-39 mr-2">
            <svg viewBox="0 0 56 64" fill="none" className="w-full h-full">
              <path
                d="M48 8C48 24 32 30 36 56"
                stroke="#68BA88"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M48 8C48 24 32 30 36 56"
                stroke="#161A1D"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Stripes on ribbon */}
              <line x1="40" y1="18" x2="48" y2="18" stroke="#161A1D" strokeWidth="2" />
              <line x1="36" y1="28" x2="44" y2="28" stroke="#161A1D" strokeWidth="2" />
              <line x1="32" y1="38" x2="40" y2="38" stroke="#161A1D" strokeWidth="2" />
              <line x1="32" y1="48" x2="40" y2="48" stroke="#161A1D" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );

    case 'designer':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Artist Palette */}
          <div className="absolute top-1.5 left-1.5 w-20 h-20  ">
            <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
              {/* Palette body */}
              <path
                d="M12 30C10 16 22 8 36 8C48 8 54 18 50 28C47 36 43 38 46 44C48 48 44 54 36 54C22 54 13 42 12 30Z"
                fill="#E8BA85"
                stroke="#161A1D"
                strokeWidth="2.5"
              />
              {/* Thumb hole */}
              <ellipse cx="44" cy="42" rx="4" ry="5" fill="#F6BE9E" stroke="#161A1D" strokeWidth="2" />
              {/* Color blobs */}
              <circle cx="22" cy="18" r="3.5" fill="#E24A4A" stroke="#161A1D" strokeWidth="1.5" />
              <circle cx="34" cy="16" r="3.5" fill="#F3BF38" stroke="#161A1D" strokeWidth="1.5" />
              <circle cx="20" cy="32" r="3.5" fill="#4B90D8" stroke="#161A1D" strokeWidth="1.5" />
              <circle cx="28" cy="44" r="3.5" fill="#50A865" stroke="#161A1D" strokeWidth="1.5" />
              {/* Brush stuck through */}
              <line x1="38" y1="12" x2="52" y2="48" stroke="#5A3E26" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M52 48L55 54L49 52Z" fill="#161A1D" />
            </svg>
          </div>

          {/* Top-Right: Brush swatches */}
          <div className="absolute top-1.5 right-1.5 w-30 h-25 mt-2 mr-2">
            <svg viewBox="0 0 64 48" fill="none" className="w-full h-full">
              <path d="M22 6C36 10 50 2 60 14" stroke="#DC4D4D" strokeWidth="7" strokeLinecap="round" />
              <path d="M34 18C44 20 54 14 62 26" stroke="#EB8686" strokeWidth="6" strokeLinecap="round" />
              <path d="M46 28C52 30 58 26 62 38" stroke="#87BE76" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Mid-Left: Paint splash */}
          <div className="absolute top-12 left-1.5 w-18 h-22 mt-35 ml-2">
            <svg viewBox="0 0 48 56" fill="none" className="w-full h-full">
              <path
                d="M4 52C8 38 18 30 26 22C28 20 22 16 16 26C12 32 6 42 4 52Z"
                fill="#DC4D4D"
                stroke="#161A1D"
                strokeWidth="1.5"
              />
              <path d="M12 48C16 38 24 34 32 30" stroke="#F18E72" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          {/* Mid-Right: Calligraphy brush */}
          <div className="absolute top-14 right-1 w-21 h-18 mt-35">
            <svg viewBox="0 0 64 56" fill="none" className="w-full h-full">
              {/* Wooden brush body */}
              <path d="M58 48L24 16" stroke="#D19E6E" strokeWidth="6" strokeLinecap="round" />
              <path d="M58 48L24 16" stroke="#161A1D" strokeWidth="2" fill="none" />
              {/* Ferrule */}
              <line x1="26" y1="18" x2="22" y2="14" stroke="#8A9AA5" strokeWidth="7" strokeLinecap="square" />
              {/* Brush tip */}
              <path d="M22 14C18 10 12 10 6 12C10 18 14 18 20 16Z" fill="#2B1A12" stroke="#161A1D" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      );

    case 'leadership':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Wooden Gavel */}
          <div className="absolute top-1.5 left-1.5 w-18 h-18">
            <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
              {/* Handle */}
              <line x1="10" y1="46" x2="34" y2="22" stroke="#683922" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="10" y1="46" x2="34" y2="22" stroke="#161A1D" strokeWidth="2" />
              {/* Mallet head */}
              <g transform="translate(34, 22) rotate(-45)">
                <rect x="-14" y="-8" width="28" height="16" rx="4" fill="#9C5B32" stroke="#161A1D" strokeWidth="2.5" />
                <line x1="-7" y1="-8" x2="-7" y2="8" stroke="#161A1D" strokeWidth="1.5" />
                <line x1="7" y1="-8" x2="7" y2="8" stroke="#161A1D" strokeWidth="1.5" />
              </g>
            </svg>
          </div>

          {/* Top-Right: Golden Crown */}
          <div className="absolute top-1.5 right-1.5 w-18 h-15">
            <svg viewBox="0 0 56 48" fill="none" className="w-full h-full">
              <path
                d="M6 36L12 16L24 26L28 12L32 26L44 16L50 36H6Z"
                fill="#E8B530"
                stroke="#161A1D"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <rect x="6" y="36" width="44" height="6" rx="2" fill="#D69E1E" stroke="#161A1D" strokeWidth="2" />
              {/* Crown jewels */}
              <circle cx="12" cy="16" r="2.5" fill="#E84A4A" stroke="#161A1D" strokeWidth="1.5" />
              <circle cx="28" cy="12" r="3" fill="#4B90D8" stroke="#161A1D" strokeWidth="1.5" />
              <circle cx="44" cy="16" r="2.5" fill="#E84A4A" stroke="#161A1D" strokeWidth="1.5" />
              <circle cx="28" cy="39" r="2" fill="#E84A4A" />
              <circle cx="18" cy="39" r="1.5" fill="#4B90D8" />
              <circle cx="38" cy="39" r="1.5" fill="#4B90D8" />
            </svg>
          </div>

          {/* Mid-Right: Orator's Podium / Lectern */}
          <div className="absolute top-14 right-1.5 w-15 h-18">
            <svg viewBox="0 0 56 64" fill="none" className="w-full h-full">
              {/* Gooseneck Mics */}
              <path d="M22 24C22 14 26 12 28 8" stroke="#161A1D" strokeWidth="2" strokeLinecap="round" />
              <circle cx="28" cy="8" r="2.5" fill="#333" />
              <path d="M34 24C34 16 32 14 36 10" stroke="#161A1D" strokeWidth="2" strokeLinecap="round" />
              <circle cx="36" cy="10" r="2.5" fill="#333" />
              {/* Slanted Top */}
              <polygon points="12,24 44,24 40,30 16,30" fill="#784022" stroke="#161A1D" strokeWidth="2" />
              {/* Stand Body */}
              <polygon points="18,30 38,30 35,58 21,58" fill="#995730" stroke="#161A1D" strokeWidth="2.5" />
              {/* Base */}
              <rect x="14" y="58" width="28" height="5" rx="2" fill="#6B381C" stroke="#161A1D" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );

    case 'social_media':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Smartphone with chat bubble */}
          <div className="absolute top-1 left-1.5 w-23 h-25 mt-2 ml-2">
            <svg viewBox="0 0 56 64" fill="none" className="w-full h-full">
              {/* Phone tilted */}
              <g transform="translate(18, 28) rotate(-15) translate(-14, -20)">
                <rect x="0" y="0" width="28" height="42" rx="5" fill="#B3D9FF" stroke="#161A1D" strokeWidth="2.5" />
                <rect x="3" y="5" width="22" height="30" rx="2" fill="#EBF4FE" stroke="#161A1D" strokeWidth="1.5" />
                <circle cx="14" cy="38.5" r="1.5" fill="#161A1D" />
              </g>
              {/* Speech bubble green */}
              <g transform="translate(28, 4)">
                <rect x="0" y="0" width="20" height="13" rx="5" fill="#75C989" stroke="#161A1D" strokeWidth="2" />
                <polygon points="4,13 8,13 3,17" fill="#75C989" stroke="#161A1D" strokeWidth="1.5" />
                <circle cx="6" cy="6.5" r="1.2" fill="#161A1D" />
                <circle cx="10" cy="6.5" r="1.2" fill="#161A1D" />
                <circle cx="14" cy="6.5" r="1.2" fill="#161A1D" />
              </g>
            </svg>
          </div>

          {/* Top-Right: Chat bubble + Social cluster */}
          <div className="absolute top-1.5 right-1.5 w-25 h-21 mt-5">
            <svg viewBox="0 0 64 56" fill="none" className="w-full h-full">
              {/* Blue Speech bubble */}
              <g transform="translate(18, 4)">
                <rect x="0" y="0" width="28" height="17" rx="6" fill="#88BEF8" stroke="#161A1D" strokeWidth="2" />
                <polygon points="6,17 12,17 4,22" fill="#88BEF8" stroke="#161A1D" strokeWidth="1.5" />
                <circle cx="8" cy="8.5" r="1.5" fill="#161A1D" />
                <circle cx="14" cy="8.5" r="1.5" fill="#161A1D" />
                <circle cx="20" cy="8.5" r="1.5" fill="#161A1D" />
              </g>
            </svg>
          </div>

          {/* Mid-Left: Heart bubble */}
          <div className="absolute top-12 left-1.5 w-18 h-15 mt-25 ml-1">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <rect x="4" y="4" width="32" height="28" rx="8" fill="#F8B4C0" stroke="#161A1D" strokeWidth="2" />
              <path
                d="M20 24C20 24 13 19 13 15C13 13 14.5 11 17 11C18.5 11 19.5 12 20 13C20.5 12 21.5 11 23 11C25.5 11 27 13 27 15C27 19 20 24 20 24Z"
                fill="#E8445A"
                stroke="#161A1D"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Mid-Right: Floating reaction bubbles (mask, music, smile) */}
          <div className="absolute top-14 right-1 w-25 h-26 mt-19 ml-2">
            <svg viewBox="0 0 64 72" fill="none" className="w-full h-full">
              {/* Purple round badge with drama mask */}
              <circle cx="44" cy="20" r="12" fill="#99C2EC" stroke="#161A1D" strokeWidth="2" />
              <ellipse cx="41" cy="18" rx="1.5" ry="2" fill="#161A1D" />
              <ellipse cx="47" cy="18" rx="1.5" ry="2" fill="#161A1D" />
              <path d="M41 23C43 25 45 25 47 23" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />

              {/* Musical note / TikTok style circle */}
              <circle cx="48" cy="46" r="10" fill="#E8B0E8" stroke="#161A1D" strokeWidth="2" />
              <path d="M46 51V42H51V45H48V51" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );

    case 'event_management':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top: Overhead Stage Truss & Spotlights */}
          <div className="absolute top-0 left-0 right-0 h-18">
            <svg viewBox="0 0 280 80" preserveAspectRatio="none" fill="none" className="w-full h-full">
              {/* Steel truss frame */}
              <rect x="8" y="6" width="264" height="12" fill="#4B5866" stroke="#161A1D" strokeWidth="2" />
              {/* Truss cross braces */}
              <line x1="16" y1="6" x2="36" y2="18" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="36" y1="6" x2="16" y2="18" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="46" y1="6" x2="66" y2="18" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="66" y1="6" x2="46" y2="18" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="214" y1="6" x2="234" y2="18" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="234" y1="6" x2="214" y2="18" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="244" y1="6" x2="264" y2="18" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="264" y1="6" x2="244" y2="18" stroke="#161A1D" strokeWidth="1.5" />

              {/* Left Spotlight */}
              <g transform="translate(48, 18)">
                {/* Mount */}
                <rect x="-3" y="0" width="6" height="4" fill="#222" />
                {/* Can */}
                <polygon points="-8,4 8,4 12,16 -12,16" fill="#2E3842" stroke="#161A1D" strokeWidth="2" transform="rotate(-25)" />
                {/* Light beam */}
                <polygon points="-8,16 8,16 60,78 -10,78" fill="rgba(255, 235, 120, 0.35)" />
              </g>

              {/* Right Spotlight */}
              <g transform="translate(232, 18)">
                <rect x="-3" y="0" width="6" height="4" fill="#222" />
                <polygon points="-8,4 8,4 12,16 -12,16" fill="#2E3842" stroke="#161A1D" strokeWidth="2" transform="rotate(25)" />
                <polygon points="-8,16 8,16 10,78 -60,78" fill="rgba(255, 235, 120, 0.35)" />
              </g>
            </svg>
          </div>

          {/* Mid-Left: SCHEDULE Clipboard */}
          <div className="absolute top-12 left-1.5 w-15 h-18 mt-33 ml-2">
            <svg viewBox="0 0 56 70" fill="none" className="w-full h-full">
              {/* Board */}
              <rect x="4" y="8" width="48" height="58" rx="4" fill="#E8D2A0" stroke="#161A1D" strokeWidth="2.5" />
              {/* Paper */}
              <rect x="8" y="14" width="40" height="48" rx="2" fill="#FFFDF8" stroke="#161A1D" strokeWidth="1.5" />
              {/* Clip */}
              <rect x="18" y="4" width="20" height="8" rx="3" fill="#8898A6" stroke="#161A1D" strokeWidth="2" />
              <circle cx="28" cy="7" r="1.5" fill="#FFF" />
              {/* Title SCHEDULE */}
              <rect x="12" y="17" width="22" height="3.5" rx="1" fill="#EA8C27" />
              {/* Calendar Grid */}
              <rect x="12" y="24" width="32" height="28" rx="2" fill="none" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="12" y1="31" x2="44" y2="31" stroke="#161A1D" strokeWidth="1.2" />
              <line x1="12" y1="38" x2="44" y2="38" stroke="#161A1D" strokeWidth="1.2" />
              <line x1="12" y1="45" x2="44" y2="45" stroke="#161A1D" strokeWidth="1.2" />
              <line x1="20" y1="24" x2="20" y2="52" stroke="#161A1D" strokeWidth="1.2" />
              <line x1="28" y1="24" x2="28" y2="52" stroke="#161A1D" strokeWidth="1.2" />
              <line x1="36" y1="24" x2="36" y2="52" stroke="#161A1D" strokeWidth="1.2" />
            </svg>
          </div>

          {/* Mid-Right: Golden TICKET */}
          <div className="absolute top-14 right-1 w-18 h-15 mt-32 mr-2">
            <svg viewBox="0 0 64 56" fill="none" className="w-full h-full">
              <g transform="translate(32, 28) rotate(-18) translate(-28, -16)">
                <rect x="0" y="0" width="56" height="30" rx="4" fill="#F7DC8B" stroke="#161A1D" strokeWidth="2.5" />
                {/* Perforation holes */}
                <circle cx="0" cy="15" r="4" fill="#EA8C27" stroke="#161A1D" strokeWidth="2" />
                <circle cx="56" cy="15" r="4" fill="#EA8C27" stroke="#161A1D" strokeWidth="2" />
                <line x1="14" y1="2" x2="14" y2="28" stroke="#161A1D" strokeWidth="1.5" strokeDasharray="3 2" />
                {/* TICKET text label */}
                <text x="28" y="19" fill="#201406" fontSize="8" fontWeight="bold" fontFamily="Fredoka, sans-serif" letterSpacing="1">
                  TICKET
                </text>
              </g>
            </svg>
          </div>
        </div>
      );

    case 'pr_outreach':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Megaphone / Bullhorn */}
          <div className="absolute top-1.5 left-1.5 w-25 h-21">
            <svg viewBox="0 0 64 56" fill="none" className="w-full h-full">
              {/* Cone */}
              <polygon points="12,24 38,12 38,36 12,24" fill="#DC4D4D" stroke="#161A1D" strokeWidth="2.5" />
              <ellipse cx="38" cy="24" rx="5" ry="12" fill="#E8B582" stroke="#161A1D" strokeWidth="2.5" />
              {/* Base cylinder */}
              <rect x="6" y="21" width="7" height="6" rx="1.5" fill="#4B5866" stroke="#161A1D" strokeWidth="2" />
              {/* Handle */}
              <path d="M14 26L18 38H13L10 26" fill="#4B5866" stroke="#161A1D" strokeWidth="2" strokeLinejoin="round" />
              {/* Sound waves */}
              <path d="M46 16C49 20 49 28 46 32" stroke="#161A1D" strokeWidth="2" strokeLinecap="round" />
              <path d="M52 11C57 18 57 30 52 37" stroke="#161A1D" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Top-Right: Topographic Folded Map with Pin */}
          <div className="absolute top-1.5 right-1.5 w-25 h-21">
            <svg viewBox="0 0 64 56" fill="none" className="w-full h-full">
              {/* Fold 1 */}
              <polygon points="6,12 20,8 20,44 6,48" fill="#B2E0B2" stroke="#161A1D" strokeWidth="2" />
              {/* Fold 2 */}
              <polygon points="20,8 36,14 36,50 20,44" fill="#A0D4A0" stroke="#161A1D" strokeWidth="2" />
              {/* Fold 3 */}
              <polygon points="36,14 52,9 52,45 36,50" fill="#B2E0B2" stroke="#161A1D" strokeWidth="2" />
              {/* Trail line */}
              <path d="M12 28C24 24 28 36 44 26" stroke="#E05555" strokeWidth="2" strokeDasharray="3 2" fill="none" />
              {/* Location pin on map */}
              <path
                d="M44 26C44 20 50 18 50 14C50 11 48 9 45 9C42 9 40 11 40 14C40 18 44 26 44 26Z"
                fill="#E53E3E"
                stroke="#161A1D"
                strokeWidth="1.5"
              />
              <circle cx="45" cy="14" r="1.5" fill="#FFF" />
            </svg>
          </div>

          {/* Mid-Left: Rolled "NEWS" Newspaper */}
          <div className="absolute top-12 left-1.5 w-20 h-27 mt-30 ml-2">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              <rect x="6" y="10" width="46" height="42" rx="3" fill="#F4F2EB" stroke="#161A1D" strokeWidth="2.5" />
              {/* NEWS Banner */}
              <rect x="10" y="14" width="38" height="10" fill="#E2DCCE" stroke="#161A1D" strokeWidth="1.5" />
              <text x="14" y="22" fill="#161A1D" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
                NEWS
              </text>
              {/* Image box */}
              <rect x="10" y="27" width="16" height="16" fill="#D0D5DD" stroke="#161A1D" strokeWidth="1.5" />
              {/* Text lines */}
              <line x1="30" y1="28" x2="46" y2="28" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="30" y1="33" x2="46" y2="33" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="30" y1="38" x2="44" y2="38" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="10" y1="46" x2="46" y2="46" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Mid-Right: Red Map Pin Marker */}
          <div className="absolute top-14 right-1.5 w-12 h-16 mt-33 mr-2">
            <svg viewBox="0 0 40 56" fill="none" className="w-full h-full">
              {/* Shadow */}
              <ellipse cx="20" cy="50" rx="10" ry="3" fill="rgba(0,0,0,0.2)" />
              {/* Pin body */}
              <path
                d="M20 48C20 48 34 30 34 18C34 9 27.5 3 20 3C12.5 3 6 9 6 18C6 30 20 48 20 48Z"
                fill="#DC2626"
                stroke="#161A1D"
                strokeWidth="2.5"
              />
              <circle cx="20" cy="18" r="5" fill="#FFFFFF" stroke="#161A1D" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );

    case 'finance':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Stacks of Gold Coins */}
          <div className="absolute top-1.5 left-1.5 w-20 h-17 ">
            <svg viewBox="0 0 64 56" fill="none" className="w-full h-full">
              {/* Coin stack 1 */}
              <g transform="translate(10, 16)">
                {[18, 12, 6, 0].map((y, i) => (
                  <g key={i} transform={`translate(0, ${y})`}>
                    <path d="M0 6V11C0 14 8 16 16 16C24 16 32 14 32 11V6" fill="#D69A1C" stroke="#161A1D" strokeWidth="2" />
                    <ellipse cx="16" cy="6" rx="16" ry="5" fill="#F8C748" stroke="#161A1D" strokeWidth="2" />
                  </g>
                ))}
              </g>
              {/* Coin stack 2 */}
              <g transform="translate(30, 24)">
                {[10, 4, -2].map((y, i) => (
                  <g key={i} transform={`translate(0, ${y})`}>
                    <path d="M0 6V11C0 14 7 16 14 16C21 16 28 14 28 11V6" fill="#D69A1C" stroke="#161A1D" strokeWidth="2" />
                    <ellipse cx="14" cy="6" rx="14" ry="4.5" fill="#F8C748" stroke="#161A1D" strokeWidth="2" />
                  </g>
                ))}
              </g>
            </svg>
          </div>

          {/* Top-Right: Classical Bank Building */}
          <div className="absolute top-1.5 right-1.5 w-20 h-20">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              {/* Triangular pediment roof */}
              <polygon points="32,6 8,20 56,20" fill="#E2EDF2" stroke="#161A1D" strokeWidth="2.5" strokeLinejoin="round" />
              <text x="28" y="18" fill="#161A1D" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                $
              </text>
              {/* Architrave */}
              <rect x="8" y="20" width="48" height="5" fill="#C2D3DE" stroke="#161A1D" strokeWidth="2" />
              {/* Columns */}
              <rect x="12" y="25" width="6" height="22" fill="#E2EDF2" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="23" y="25" width="6" height="22" fill="#E2EDF2" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="35" y="25" width="6" height="22" fill="#E2EDF2" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="46" y="25" width="6" height="22" fill="#E2EDF2" stroke="#161A1D" strokeWidth="1.5" />
              {/* Base steps */}
              <rect x="6" y="47" width="52" height="5" rx="1" fill="#C2D3DE" stroke="#161A1D" strokeWidth="2" />
              <rect x="4" y="52" width="56" height="5" rx="1" fill="#9FB5C3" stroke="#161A1D" strokeWidth="2" />
            </svg>
          </div>

          {/* Mid-Left: Calculator */}
          <div className="absolute top-12 left-1.5 w-15 h-18 mt-30 ml-2">
            <svg viewBox="0 0 56 64" fill="none" className="w-full h-full">
              <rect x="6" y="4" width="44" height="56" rx="6" fill="#3D4B59" stroke="#161A1D" strokeWidth="2.5" />
              {/* Screen */}
              <rect x="12" y="10" width="32" height="12" rx="2" fill="#88BA9A" stroke="#161A1D" strokeWidth="2" />
              <text x="36" y="20" fill="#161A1D" fontSize="8" fontFamily="monospace" textAnchor="end">
                128.50
              </text>
              {/* Buttons grid */}
              {[26, 34, 42, 50].map((y, row) => (
                <g key={row}>
                  {[12, 20, 28, 36].map((x, col) => (
                    <rect
                      key={col}
                      x={x}
                      y={y}
                      width="6"
                      height="5"
                      rx="1"
                      fill={col === 3 ? '#E59838' : '#6A7D90'}
                      stroke="#161A1D"
                      strokeWidth="1.2"
                    />
                  ))}
                </g>
              ))}
            </svg>
          </div>

          {/* Mid-Right: BANK icon badge */}
          <div className="absolute top-14 right-1 w-18 h-18 mt-33 mr-2">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              <polygon points="32,8 10,22 54,22" fill="#E2EDF2" stroke="#161A1D" strokeWidth="2.5" />
              <text x="20" y="20" fill="#161A1D" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
                BANK
              </text>
              <rect x="10" y="22" width="44" height="4" fill="#BACAD5" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="14" y="26" width="5" height="18" fill="#E2EDF2" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="24" y="26" width="5" height="18" fill="#E2EDF2" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="35" y="26" width="5" height="18" fill="#E2EDF2" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="45" y="26" width="5" height="18" fill="#E2EDF2" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="8" y="44" width="48" height="5" rx="1" fill="#98AFBD" stroke="#161A1D" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );

    case 'content_writer':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Retro Typewriter */}
          <div className="absolute top-1 left-1 w-25 h-25 ">
            <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
              {/* Paper scrolled out */}
              <rect x="22" y="8" width="28" height="24" rx="1.5" fill="#FFFFFE" stroke="#161A1D" strokeWidth="2" />
              <line x1="26" y1="14" x2="46" y2="14" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="26" y1="18" x2="44" y2="18" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="26" y1="22" x2="40" y2="22" stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
              {/* Roller */}
              <rect x="14" y="26" width="44" height="8" rx="3" fill="#2E3842" stroke="#161A1D" strokeWidth="2" />
              <circle cx="14" cy="30" r="4" fill="#6A7D90" stroke="#161A1D" strokeWidth="1.5" />
              <circle cx="58" cy="30" r="4" fill="#6A7D90" stroke="#161A1D" strokeWidth="1.5" />
              {/* Main typewriter chassis */}
              <path
                d="M10 40H62L56 64H16L10 40Z"
                fill="#546678"
                stroke="#161A1D"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Keyboard keys */}
              {[44, 49, 54, 59].map((y, row) => (
                <g key={row}>
                  {[20, 27, 34, 41, 48].map((x, col) => (
                    <circle key={col} cx={x + (row % 2) * 3} cy={y} r="2.2" fill="#E2E8F0" stroke="#161A1D" strokeWidth="1.2" />
                  ))}
                </g>
              ))}
            </svg>
          </div>

          {/* Mid-Right: Ink bottle & Quill Pen */}
          <div className="absolute top-14 right-1.5 w-20 h-24 mt-30">
            <svg viewBox="0 0 72 80" fill="none" className="w-full h-full">
              {/* Quill feather angling up-left */}
              <g transform="translate(36, 44) rotate(-35) translate(-10, -46)">
                {/* Feather vane */}
                <path
                  d="M10 0C4 10 2 24 6 36L10 44L14 36C18 24 16 10 10 0Z"
                  fill="#E2E8F0"
                  stroke="#161A1D"
                  strokeWidth="2"
                />
                {/* Spine */}
                <line x1="10" y1="0" x2="10" y2="52" stroke="#4B5866" strokeWidth="2" />
                {/* Feather cuts */}
                <line x1="6" y1="16" x2="10" y2="20" stroke="#161A1D" strokeWidth="1.5" />
                <line x1="14" y1="22" x2="10" y2="26" stroke="#161A1D" strokeWidth="1.5" />
                <line x1="6" y1="30" x2="10" y2="34" stroke="#161A1D" strokeWidth="1.5" />
              </g>

              {/* Inkwell bottle */}
              <rect x="22" y="44" width="28" height="6" rx="2" fill="#3E4C59" stroke="#161A1D" strokeWidth="2" />
              <path
                d="M20 50H52L56 70C56 72 54 74 52 74H20C18 74 16 72 16 70L20 50Z"
                fill="#202A34"
                stroke="#161A1D"
                strokeWidth="2.5"
              />
              <rect x="26" y="56" width="20" height="12" rx="2" fill="#F4E9D5" stroke="#161A1D" strokeWidth="1.5" />
              <text x="31" y="65" fill="#161A1D" fontSize="6" fontWeight="bold">
                INK
              </text>
            </svg>
          </div>
        </div>
      );

    case 'researcher':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Microscope */}
          <div className="absolute top-1 left-1 w-20 h-22">
            <svg viewBox="0 0 64 72" fill="none" className="w-full h-full">
              {/* Eyepiece tube */}
              <g transform="translate(32, 28) rotate(-35) translate(-14, -20)">
                <rect x="10" y="0" width="8" height="8" rx="2" fill="#E2E8F0" stroke="#161A1D" strokeWidth="2" />
                <rect x="11" y="8" width="6" height="24" fill="#9FB0BE" stroke="#161A1D" strokeWidth="2" />
                <polygon points="10,32 18,32 16,38 12,38" fill="#4B5866" stroke="#161A1D" strokeWidth="1.5" />
              </g>
              {/* Curved arm */}
              <path
                d="M38 28C48 34 48 50 36 56"
                stroke="#687C8E"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M38 28C48 34 48 50 36 56"
                stroke="#161A1D"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Stage platform */}
              <rect x="14" y="44" width="22" height="4" rx="1.5" fill="#2E3842" stroke="#161A1D" strokeWidth="2" />
              {/* Base */}
              <rect x="16" y="60" width="34" height="6" rx="3" fill="#2E3842" stroke="#161A1D" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Top-Right: Books on Shelf */}
          <div className="absolute top-1.5 right-1.5 w-20 h-20 mr-2">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              {/* Book 1 (Brown/gold) */}
              <rect x="22" y="10" width="10" height="42" rx="2" fill="#BA6E3B" stroke="#161A1D" strokeWidth="2" />
              <line x1="24" y1="18" x2="30" y2="18" stroke="#161A1D" strokeWidth="1.5" />
              <line x1="24" y1="44" x2="30" y2="44" stroke="#161A1D" strokeWidth="1.5" />
              {/* Book 2 (Navy) */}
              <rect x="34" y="6" width="11" height="46" rx="2" fill="#3D6899" stroke="#161A1D" strokeWidth="2" />
              <line x1="36" y1="16" x2="43" y2="16" stroke="#E2E8F0" strokeWidth="1.5" />
              <line x1="36" y1="22" x2="43" y2="22" stroke="#E2E8F0" strokeWidth="1.5" />
              {/* Book 3 slanting */}
              <g transform="translate(47, 52) rotate(18) translate(0, -42)">
                <rect x="0" y="0" width="9" height="42" rx="2" fill="#589B66" stroke="#161A1D" strokeWidth="2" />
              </g>
            </svg>
          </div>

          {/* Mid-Left: Stack of 3 Books */}
          <div className="absolute top-12 left-1.5 w-18 h-21 mt-30">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              {/* Book bottom */}
              <rect x="8" y="44" width="46" height="12" rx="3" fill="#3E72A8" stroke="#161A1D" strokeWidth="2.5" />
              <path d="M12 44V56" stroke="#FFF" strokeWidth="2" />
              {/* Book middle */}
              <rect x="12" y="32" width="40" height="12" rx="3" fill="#D38A4B" stroke="#161A1D" strokeWidth="2.5" />
              <path d="M16 32V44" stroke="#FFF" strokeWidth="2" />
              {/* Book top */}
              <rect x="16" y="20" width="34" height="12" rx="3" fill="#D65858" stroke="#161A1D" strokeWidth="2.5" />
              <path d="M20 20V32" stroke="#FFF" strokeWidth="2" />
            </svg>
          </div>

          {/* Mid-Right: Test tube rack */}
          <div className="absolute top-14 right-1 w-20 h-20 mt-30 mr-2">
            <svg viewBox="0 0 72 64" fill="none" className="w-full h-full">
              {/* Wooden Rack */}
              <rect x="8" y="22" width="56" height="4" fill="#A87545" stroke="#161A1D" strokeWidth="2" />
              <rect x="6" y="52" width="60" height="6" rx="2" fill="#8C5C32" stroke="#161A1D" strokeWidth="2.5" />
              <line x1="12" y1="24" x2="12" y2="52" stroke="#161A1D" strokeWidth="2" />
              <line x1="60" y1="24" x2="60" y2="52" stroke="#161A1D" strokeWidth="2" />

              {/* Test Tube 1 (Cyan liquid) */}
              <g transform="translate(18, 10)">
                <rect x="0" y="0" width="8" height="40" rx="4" fill="none" stroke="#161A1D" strokeWidth="2" />
                <path d="M0 24H8V36C8 38 6 40 4 40C2 40 0 38 0 36V24Z" fill="#3CC9C9" />
              </g>

              {/* Test Tube 2 (Red liquid) */}
              <g transform="translate(32, 10)">
                <rect x="0" y="0" width="8" height="40" rx="4" fill="none" stroke="#161A1D" strokeWidth="2" />
                <path d="M0 16H8V36C8 38 6 40 4 40C2 40 0 38 0 36V16Z" fill="#E84F4F" />
              </g>

              {/* Test Tube 3 (Yellow liquid) */}
              <g transform="translate(46, 10)">
                <rect x="0" y="0" width="8" height="40" rx="4" fill="none" stroke="#161A1D" strokeWidth="2" />
                <path d="M0 28H8V36C8 38 6 40 4 40C2 40 0 38 0 36V28Z" fill="#F4D347" />
              </g>
            </svg>
          </div>
        </div>
      );

    case 'project_manager':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Top-Left: Gantt Timeline Chart */}
          <div className="absolute top-1.5 left-1.5 w-20 h-17">
            <svg viewBox="0 0 64 56" fill="none" className="w-full h-full">
              <rect x="4" y="6" width="56" height="44" rx="4" fill="#F8FAFC" stroke="#161A1D" strokeWidth="2.5" />
              {/* Header bar */}
              <rect x="4" y="6" width="56" height="10" rx="3" fill="#DCE5ED" stroke="#161A1D" strokeWidth="1.5" />
              {/* Vertical grid lines */}
              <line x1="20" y1="6" x2="20" y2="50" stroke="#CBD5E1" strokeWidth="1.2" />
              <line x1="34" y1="6" x2="34" y2="50" stroke="#CBD5E1" strokeWidth="1.2" />
              <line x1="48" y1="6" x2="48" y2="50" stroke="#CBD5E1" strokeWidth="1.2" />
              {/* Gantt task bars */}
              <rect x="8" y="20" width="22" height="6" rx="2" fill="#E56E4A" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="22" y="29" width="24" height="6" rx="2" fill="#4B90D8" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="36" y="38" width="20" height="6" rx="2" fill="#50A865" stroke="#161A1D" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Top-Right: Wall Calendar Sheet */}
          <div className="absolute top-1.5 right-1.5 w-20 h-20">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              {/* Calendar page */}
              <rect x="8" y="8" width="48" height="48" rx="4" fill="#FFFFFE" stroke="#161A1D" strokeWidth="2.5" />
              {/* Red Header */}
              <rect x="8" y="8" width="48" height="14" rx="3" fill="#DC4D4D" stroke="#161A1D" strokeWidth="2" />
              {/* Binding rings */}
              <circle cx="18" cy="8" r="2.5" fill="#555" stroke="#161A1D" strokeWidth="1.5" />
              <circle cx="46" cy="8" r="2.5" fill="#555" stroke="#161A1D" strokeWidth="1.5" />
              {/* Grid squares */}
              {[27, 36, 45].map((y, row) => (
                <g key={row}>
                  {[14, 23, 32, 41].map((x, col) => (
                    <rect
                      key={col}
                      x={x}
                      y={y}
                      width="6"
                      height="5"
                      rx="1"
                      fill={row === 0 && col < 3 ? '#50A865' : '#E2E8F0'}
                      stroke="#161A1D"
                      strokeWidth="1"
                    />
                  ))}
                </g>
              ))}
            </svg>
          </div>

          {/* Mid-Left: Checklist Clipboard with Pencil */}
          <div className="absolute top-12 left-1.5 w-15 h-18">
            <svg viewBox="0 0 64 72" fill="none" className="w-full h-full">
              {/* Clipboard */}
              <rect x="6" y="8" width="46" height="58" rx="4" fill="#D9A873" stroke="#161A1D" strokeWidth="2.5" />
              <rect x="10" y="14" width="38" height="48" rx="2" fill="#FFFDF8" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="20" y="4" width="18" height="7" rx="2.5" fill="#718096" stroke="#161A1D" strokeWidth="2" />
              {/* Checkmarks */}
              {[22, 32, 42].map((y, i) => (
                <g key={i}>
                  <rect x="14" y={y} width="6" height="6" rx="1" fill="#E2E8F0" stroke="#161A1D" strokeWidth="1.2" />
                  <path d={`M15 ${y + 3}L17 ${y + 5}L22 ${y + 1}`} stroke="#2B7A4B" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="24" y1={y + 3} x2="42" y2={y + 3} stroke="#161A1D" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              ))}
              {/* Yellow pencil slanted */}
              <g transform="translate(48, 48) rotate(35) translate(-3, -16)">
                <rect x="0" y="0" width="6" height="26" fill="#F4BF3A" stroke="#161A1D" strokeWidth="1.5" />
                <polygon points="0,26 6,26 3,32" fill="#E2D4B9" stroke="#161A1D" strokeWidth="1.5" />
                <polygon points="2,30 4,30 3,32" fill="#161A1D" />
              </g>
            </svg>
          </div>

          {/* Mid-Right: Clipboard with big Green Checkmark */}
          <div className="absolute top-14 right-1 w-17 h-17">
            <svg viewBox="0 0 64 72" fill="none" className="w-full h-full">
              <rect x="8" y="8" width="46" height="58" rx="4" fill="#D9A873" stroke="#161A1D" strokeWidth="2.5" />
              <rect x="12" y="14" width="38" height="48" rx="2" fill="#FFFDF8" stroke="#161A1D" strokeWidth="1.5" />
              <rect x="22" y="4" width="18" height="7" rx="2.5" fill="#718096" stroke="#161A1D" strokeWidth="2" />
              {/* Big circular green check badge */}
              <circle cx="31" cy="38" r="14" fill="#50A865" stroke="#161A1D" strokeWidth="2.5" />
              <path d="M24 38L29 43L39 33" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      );

    default:
      return null;
  }
};

  const content = renderProps();
  if (!content) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {content}
    </div>
  );
};
