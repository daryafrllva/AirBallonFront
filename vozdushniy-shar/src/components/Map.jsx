import React, { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.ymaps) {
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.type = "text/javascript";
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      window.ymaps.ready(() => {
        new window.ymaps.Map(mapRef.current, {
          center: [56.484645, 84.948205], // Координаты Томска
          zoom: 11,
          controls: ["zoomControl"],
        });
      });
    }
  }, []);

  return (
    <div className="map-block">
      <div className="map-block__map">
        <div
          ref={mapRef}
          style={{ width: "100%", height: "400px", borderRadius: "12px" }}
        />
      </div>
      <div className="map-block__info">
        <div className="map-block__city">Томск</div>
        <div className="map-block__phone">Телефон: +7 903 955-20-61</div>
        <div className="map-block__details">
          ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ФРОЛОВ ДМИТРИЙ СЕРГЕЕВИЧ<br />
          ИНН: 701703148594<br />
          ОГРНИП: 322703100015314<br />
          Адрес: Томская область, Томск<br />
          e-mail: Dmitri2007@rambler.ru
        </div>
        <button className="map-block__btn">Забронировать мечту</button>
      </div>
    </div>
  );
}

export default Map;