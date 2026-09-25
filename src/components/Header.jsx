import React from 'react';

export function Header({ showTitle, reasons, showSpecial }) {
  return (
    <header className="header-section">
      <h1 className={`main-title ${showTitle ? 'visible' : ''}`}>
        Razones por las que te amo, mi amor:
      </h1>

      <div className="reasons-list">
        {reasons.map((reason, idx) => (
          <div
            key={`${reason}-${idx}`}
            className="reason-item"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            {reason}
          </div>
        ))}
      </div>

      <div className={`special-phrase ${showSpecial ? 'visible' : ''}`}>
        <span>Pero sobre todo porque sos mi vida entera 💛</span>
      </div>
    </header>
  );
}
