import TeamMemberImage from './TeamMemberImage.jsx';

/**
 * TeamMemberCard Component
 * Displays a single team member with their photo/placeholder, name, role, authentic bio,
 * and optional social links.
 */
export default function TeamMemberCard({
  name,
  role,
  bio,
  image,
  alt,
  socials = null,
  delay = 0,
  className = ''
}) {
  const bioParagraphs = Array.isArray(bio) ? bio : [bio];
  const hasSocials = socials && Object.values(socials).some(Boolean);

  return (
    <article 
      className={`team-card reveal ${className}`.trim()}
      style={{ '--delay': `${delay}ms` }}
    >
      <div className="team-card-inner">
        <TeamMemberImage 
          src={image} 
          alt={alt || `${name} - ${role} of croevoAI`}
          name={name}
          role={role}
        />

        <div className="team-card-content">
          <div className="team-card-header">
            <h3 className="team-card-name">{name}</h3>
            <span className="team-card-role">{role}</span>
          </div>

          <div className="team-card-bio">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {hasSocials && (
            <div className="team-card-socials" aria-label={`Social links for ${name}`}>
              {socials.x && (
                <a 
                  href={socials.x} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label={`${name} on X`}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              )}
              {socials.linkedin && (
                <a 
                  href={socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label={`${name} on LinkedIn`}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22c-.92 0-1.67.75-1.67 1.67a1.67 1.67 0 0 0 1.67 1.68 1.67 1.67 0 0 0 1.67-1.68c0-.92-.75-1.67-1.67-1.67z"/>
                  </svg>
                </a>
              )}
              {socials.github && (
                <a 
                  href={socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  aria-label={`${name} on GitHub`}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="team-card-glow" aria-hidden="true" />
      </div>
    </article>
  );
}
