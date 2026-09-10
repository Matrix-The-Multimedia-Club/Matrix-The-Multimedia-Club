import { useState } from 'react';

export const AvatarRenderer = ({ avatarId, className = 'w-full h-full', alt = 'Avatar', role }) => {
  const [imgErrorCount, setImgErrorCount] = useState(0);

  const isUrl = avatarId && (avatarId.startsWith('http://') || avatarId.startsWith('https://') || avatarId.startsWith('data:') || avatarId.startsWith('blob:') || avatarId.startsWith('/'));

  if (isUrl) {
    let driveId = null;
    if (avatarId.includes('drive.google.com')) {
      const match = avatarId.match(/[?&]id=([a-zA-Z0-9_-]+)/) || avatarId.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        driveId = match[1];
      }
    }

    // Try reliable direct image CDN sources for Google Drive links
    let currentSrc = avatarId;
    if (driveId) {
      if (imgErrorCount === 0) {
        currentSrc = `https://lh3.googleusercontent.com/d/${driveId}`;
      } else if (imgErrorCount === 1) {
        currentSrc = `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
      } else if (imgErrorCount === 2) {
        currentSrc = `https://drive.google.com/uc?export=view&id=${driveId}`;
      }
    }

    if (imgErrorCount < (driveId ? 3 : 1)) {
      return (
        <img
          src={currentSrc}
          alt={alt}
          className={`${className} object-cover rounded-full transition-all duration-300`}
          style={{
            imageRendering: '-webkit-optimize-contrast',
            filter: 'contrast(1.04) brightness(1.02)',
          }}
          onError={() => setImgErrorCount((prev) => prev + 1)}
        />
      );
    }
  }

  // Fallback to vector preset matching illustration style
  const presetKey = (avatarId && avatarId.startsWith('preset:'))
    ? avatarId.replace('preset:', '')
    : (role === 'designer' ? 'female-1' : role === 'leadership' ? 'male-2' : role === 'social_media' ? 'female-2' : role === 'event_management' ? 'male-3' : role === 'pr_outreach' ? 'female-3' : role === 'finance' ? 'male-4' : role === 'content_writer' ? 'female-4' : 'male-1');

  switch (presetKey) {
    case 'male-1': // Technical
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#2E3842" stroke="#161A1D" strokeWidth="3" />
          <path d="M42 73C42 78 58 78 58 73" stroke="#161A1D" strokeWidth="2.5" fill="#E8B298" />
          <path d="M43 62H57V74H43V62Z" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M36 44C36 32 42 28 50 28C58 28 64 32 64 44C64 56 58 64 50 64C42 64 36 56 36 44Z" fill="#F5C7A9" stroke="#161A1D" strokeWidth="3" />
          <circle cx="34" cy="46" r="4.5" fill="#F5C7A9" stroke="#161A1D" strokeWidth="2.5" />
          <circle cx="66" cy="46" r="4.5" fill="#F5C7A9" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M33 39C33 26 40 20 50 20C60 20 67 26 67 39C65 34 60 32 50 32C40 32 35 34 33 39Z" fill="#5A3825" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M33 35C33 30 36 24 44 22C41 26 40 31 40 34" fill="#5A3825" />
        </svg>
      );

    case 'female-1': // Designer
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M30 38C30 55 32 75 35 84C38 84 41 74 41 62" fill="#D97742" stroke="#161A1D" strokeWidth="3" />
          <path d="M70 38C70 55 68 75 65 84C62 84 59 74 59 62" fill="#D97742" stroke="#161A1D" strokeWidth="3" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#3B82F6" stroke="#161A1D" strokeWidth="3" />
          <path d="M43 73C43 78 57 78 57 73" stroke="#161A1D" strokeWidth="2.5" fill="#FADAC5" />
          <path d="M44 61H56V73H44V61Z" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M37 45C37 34 43 30 50 30C57 30 63 34 63 45C63 56 57 63 50 63C43 63 37 56 37 45Z" fill="#FADAC5" stroke="#161A1D" strokeWidth="3" />
          <path d="M33 39C33 26 40 21 50 21C60 21 67 26 67 39C65 34 60 32 50 32C40 32 35 34 33 39Z" fill="#D97742" stroke="#161A1D" strokeWidth="2.5" />
        </svg>
      );

    case 'male-2': // Leadership
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#8B0000" stroke="#161A1D" strokeWidth="3" />
          <path d="M43 62H57V74H43V62Z" fill="#D29E82" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M36 44C36 32 42 28 50 28C58 28 64 32 64 44C64 56 58 64 50 64C42 64 36 56 36 44Z" fill="#E8B298" stroke="#161A1D" strokeWidth="3" />
          <circle cx="34" cy="46" r="4.5" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <circle cx="66" cy="46" r="4.5" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M33 37C33 24 39 19 50 19C61 19 67 24 67 37C65 31 59 29 50 29C41 29 35 31 33 37Z" fill="#2C1D11" stroke="#161A1D" strokeWidth="3" />
        </svg>
      );

    case 'female-2': // Social Media
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#6C2E64" stroke="#161A1D" strokeWidth="3" />
          <path d="M44 61H56V73H44V61Z" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M37 45C37 34 43 30 50 30C57 30 63 34 63 45C63 56 57 63 50 63C43 63 37 56 37 45Z" fill="#FADAC5" stroke="#161A1D" strokeWidth="3" />
          <path d="M32 40C32 25 40 20 50 20C60 20 68 25 68 40C66 32 60 30 50 30C40 30 34 32 32 40Z" fill="#1C1B20" stroke="#161A1D" strokeWidth="3" />
        </svg>
      );

    case 'male-3': // Event Management
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#EA8C27" stroke="#161A1D" strokeWidth="3" />
          <path d="M43 62H57V74H43V62Z" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M36 44C36 32 42 28 50 28C58 28 64 32 64 44C64 56 58 64 50 64C42 64 36 56 36 44Z" fill="#F5C7A9" stroke="#161A1D" strokeWidth="3" />
          <path d="M33 38C33 25 40 20 50 20C60 20 67 25 67 38C65 33 59 31 50 31C41 31 35 33 33 38Z" fill="#4A2E14" stroke="#161A1D" strokeWidth="3" />
        </svg>
      );

    case 'female-3': // PR & Outreach
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#94B2DB" stroke="#161A1D" strokeWidth="3" />
          <path d="M44 61H56V73H44V61Z" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M37 45C37 34 43 30 50 30C57 30 63 34 63 45C63 56 57 63 50 63C43 63 37 56 37 45Z" fill="#FADAC5" stroke="#161A1D" strokeWidth="3" />
          <path d="M32 41C32 25 40 21 50 21C60 21 68 25 68 41C66 33 60 30 50 32C40 30 34 33 32 41Z" fill="#7C3AED" stroke="#161A1D" strokeWidth="3" />
        </svg>
      );

    case 'male-4': // Finance
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#266B3C" stroke="#161A1D" strokeWidth="3" />
          <path d="M43 62H57V74H43V62Z" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M36 44C36 32 42 28 50 28C58 28 64 32 64 44C64 56 58 64 50 64C42 64 36 56 36 44Z" fill="#F5C7A9" stroke="#161A1D" strokeWidth="3" />
          <path d="M33 38C33 25 40 20 50 20C60 20 67 25 67 38C65 33 59 31 50 31C41 31 35 33 33 38Z" fill="#1F2937" stroke="#161A1D" strokeWidth="3" />
        </svg>
      );

    case 'female-4': // Content Writer
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#F6D56D" stroke="#161A1D" strokeWidth="3" />
          <path d="M44 61H56V73H44V61Z" fill="#E8B298" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M37 45C37 34 43 30 50 30C57 30 63 34 63 45C63 56 57 63 50 63C43 63 37 56 37 45Z" fill="#FADAC5" stroke="#161A1D" strokeWidth="3" />
          <path d="M32 41C32 25 40 21 50 21C60 21 68 25 68 41C66 33 60 30 50 32C40 30 34 33 32 41Z" fill="#C98842" stroke="#161A1D" strokeWidth="3" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#FDFBF7" />
          <path d="M22 96C22 78 35 73 50 73C65 73 78 78 78 96" fill="#4B5563" stroke="#161A1D" strokeWidth="3" />
          <path d="M43 62H57V74H43V62Z" fill="#E5B299" stroke="#161A1D" strokeWidth="2.5" />
          <path d="M36 44C36 32 42 28 50 28C58 28 64 32 64 44C64 56 58 64 50 64C42 64 36 56 36 44Z" fill="#F5C7A9" stroke="#161A1D" strokeWidth="3" />
          <path d="M33 38C33 25 40 21 50 21C60 21 67 25 67 38C65 33 59 31 50 31C41 31 35 33 33 38Z" fill="#374151" stroke="#161A1D" strokeWidth="3" />
        </svg>
      );
  }
};
