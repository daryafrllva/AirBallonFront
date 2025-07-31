import React from "react";

function Gallery() {
  return (
    <div className="gallery-container">
      <h2>Видимое счастье</h2>
      <div>Фото наших довольных клиентов</div>
      <div className="gallery-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="gallery-item" key={i}></div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
