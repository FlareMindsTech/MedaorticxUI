import React, { useRef } from 'react';

export const TiltCard3D = ({
  id,
  cardClass = '',
  eyebrow,
  titleTop,
  titleBottom,
  badgeText,
  description,
  features = [],
  keyTitle = 'KEY AREAS',
  labelStrong,
  labelSmall,
  ctaText = 'VIEW DETAILS',
  href,
  onClick,
  titleTag: HeadingTag = 'h3',
}) => {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    if (!cardRef.current) return;
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 850px)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 3.5;
    const rotateX = ((y / rect.height) - 0.5) * -3.5;

    cardRef.current.style.transform = `translate3d(0,-8px,0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handlePointerLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
      cardRef.current.classList.remove('pressed');
    }
  };

  const handlePointerDown = () => {
    if (cardRef.current) {
      cardRef.current.classList.add('pressed');
    }
  };

  const handlePointerUp = () => {
    if (cardRef.current) {
      cardRef.current.classList.remove('pressed');
    }
  };

  const targetHref = href || `#${id}`;

  return (
    <a
      ref={cardRef}
      href={targetHref}
      onClick={(e) => onClick && onClick(e, id)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerLeave}
      className={`service-card-3d ${cardClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo`}
    >
      <div className="card-top">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <HeadingTag>
            {titleTop}
            <br />
            {titleBottom}
          </HeadingTag>
        </div>
        <span className="premium-badge">{badgeText}</span>
      </div>

      <div className="card-body">
        <p className="description">{description}</p>

        <div className="key-title">{keyTitle}</div>

        <div className="feature-grid">
          {features.map((feat, fIdx) => (
            <div key={fIdx} className="feature">
              <span className="feature-icon" aria-hidden="true">{feat.icon}</span>
              <span>{feat.text}</span>
            </div>
          ))}
        </div>

        <div className="card-divider" />

        <div className="card-footer">
          <div className="service-label">
            <strong>{labelStrong}</strong>
            <small>{labelSmall}</small>
          </div>

          <span className="cta-3d">
            {ctaText} <b aria-hidden="true">→</b>
          </span>
        </div>

        {/* Decorative elements */}
        <div className="decor decor-1" aria-hidden="true" />
        <div className="decor decor-2" aria-hidden="true" />
        <div className="decor-line" aria-hidden="true" />
      </div>
    </a>
  );
};
