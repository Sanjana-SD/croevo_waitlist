import { useState } from 'react';

/**
 * TeamMemberImage Component
 * Handles image rendering with support for:
 * - Actual image with lazy loading and object-fit: cover
 * - Fallback placeholder when image is missing or fails to load
 * - Maintained aspect ratio (4:5 portrait)
 * - Accessible alt text
 * 
 * To add actual photos:
 * 1. Place the photo in `src/assets/team/` (e.g., `prem.jpg`, `abhinav.jpg`, `mouli.jpg`)
 * 2. Import the image or provide the path to the `src` prop
 */
export default function TeamMemberImage({
  src,
  alt,
  name,
  role,
  aspectRatio = '4/5',
  className = ''
}) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(src) && !imageError;

  return (
    <div 
      className={`team-photo-wrap ${className}`.trim()}
      style={{ aspectRatio }}
      aria-label={alt || `${name} - ${role}`}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || `${name} - ${role} of croevoAI`}
          className="team-photo-img"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="team-photo-placeholder" role="img" aria-label={alt || `${name} photo placeholder`}>
          <div className="placeholder-pattern" aria-hidden="true" />
          <div className="placeholder-orbit" aria-hidden="true">
            <span className="orbit-ring" />
            <span className="orbit-ring orbit-ring-inner" />
          </div>
          <div className="placeholder-icon-box" aria-hidden="true">
            <svg 
              className="placeholder-avatar-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="placeholder-badge">
            <span className="placeholder-pulse" aria-hidden="true" />
            <span className="placeholder-text">PHOTO COMING SOON</span>
          </div>
          <div className="placeholder-hint" aria-hidden="true">
            <small>src/assets/team/{name ? name.toLowerCase().split(' ')[0] : 'member'}.jpg</small>
          </div>
        </div>
      )}
      <div className="team-photo-glow" aria-hidden="true" />
    </div>
  );
}
