import React from 'react';

export function FinalCard({ show, onRevealFlower }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <h2>¡Para vos, mi reinita hermosa de mi corazon! ☀️🌻✨</h2>
        <p className="modal-original-text">
          Sos la luz de todos mis días y mi persona favorita en el universo. ¡Gracias por llenar mi vida de tanto amor y alegría!
        </p>
        <div className="card-hearts">☀️ 💛 🌻 💛 ☀️</div>
        <button onClick={onRevealFlower} className="modal-action-btn">
          <span>Ver tu flor especial</span>
          <span className="btn-emoji">🌻</span>
        </button>
      </div>
    </div>
  );
}
