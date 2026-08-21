import React, { useRef } from 'react';

export const ServiceCard = ({ service, index, onClick }) => {
  const cardRef = useRef(null);

  const isAcademy = service.id.includes('academy') || service.id.includes('coding');
  const cardClass = isAcademy ? 'academy-card-theme' : 'rcm-card-theme';
  const eyebrow = isAcademy ? 'EDUCATION' : 'HEALTHCARE';
  const badgeText = isAcademy ? 'ACADEMY' : 'RCM';
  const labelStrong = isAcademy ? 'ACADEMY' : 'RCM';
  const labelSmall = isAcademy ? 'Medical Coding' : 'Recruitment';

  // Split title if it contains spaces
  const titleParts = service.title.split(' ');
  const titleTop = titleParts[0];
  const titleBottom = titleParts.slice(1).join(' ');

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

  const featureIcons = isAcademy 
    ? ['▤', '♙', '</>', '▣'] 
    : ['▣', '▣', 'T', '✦'];

  return (
    <a
      ref={cardRef}
      href={`#service-${service.id}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick(e, service.id);
        }
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerLeave}
      className={`service-card-3d ${cardClass}`}
      aria-label={`Open ${service.title}`}
    >
      <div className="card-top">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>
            {titleTop}
            <br />
            {titleBottom}
          </h2>
        </div>
        <span className="premium-badge">{badgeText}</span>
      </div>

      <div className="card-body">
        <p className="description">{service.shortDesc || service.fullDesc}</p>

        <div className="key-title">KEY AREAS</div>

        <div className="feature-grid">
          {service.features && service.features.slice(0, 4).map((feat, fIdx) => (
            <div key={fIdx} className="feature">
              <span className="feature-icon">{featureIcons[fIdx % featureIcons.length]}</span>
              <span>{feat}</span>
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
            VIEW DETAILS <b>→</b>
          </span>
        </div>

        {/* Decorative shapes */}
        <div className="decor decor-1" />
        <div className="decor decor-2" />
        <div className="decor-line" />
      </div>
    </a>
  );
};

