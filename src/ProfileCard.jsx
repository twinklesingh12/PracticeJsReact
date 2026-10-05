import React from 'react';
// Props let the parent component choose what this card displays.
export default function ProfileCard({ name, imageUrl, description }) {
  return (
    <article className="profile-card">
      <div className="card-art">
        <span className="sun" aria-hidden="true">✳</span>
        <div className="avatar-frame">
          <img src={imageUrl} alt={`Portrait illustration of ${name}`} />
        </div>
      </div>

      <div className="card-content">
        <span className="eyebrow">HELLO, I'M</span>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="badge"><span aria-hidden="true">✦</span> Always learning</div>
      </div>
    </article>
  );
}
