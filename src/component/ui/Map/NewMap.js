
import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark, Polyline, ZoomControl, RoutePanel } from "react-yandex-maps";

const NewMap = () => {
  // Хранение координат точек А и Б
  const [pointA, setPointA] = useState(null);
  const [pointB, setPointB] = useState(null);

  // Хранение данных о маршруте
  const [route, setRoute] = useState();

  // Функция, вызываемая при выборе точки на карте
  const handlePointSelect = (e) => {
    const coords = e.get("coords");

    // Если точка А не задана, устанавливаем ее
    if (!pointA) {
      setPointA(coords);
    }
    // Иначе, если точка Б не задана, устанавливаем ее
    else if (!pointB) {
      setPointB(coords);
    }
  };

  // Функция, вызываемая при получении данных о маршруте
  const handleRouteUpdate = (e) => {
    setRoute(e.get("activeRoute"));
  };

  // Очистка карты от маркеров и линии маршрута
  const clearMap = () => {
    setPointA(null);
    setPointB(null);
    setRoute(null);
  };

  // Возвращаем JSX с картой, маркерами, линией маршрута и панелью маршрутизации
  return (
    <YMaps>
      <div className="map-container">
        <Map
          width="100%"
          height="400px"
          defaultState={{
            center: [55.753994, 37.622093],
            zoom: 12,
          }}
          onClick={handlePointSelect}
        >
          {/* Маркер точки А */}
          {pointA && (
            <Placemark
              geometry={pointA}
              options={{
                iconColor: "red",
                draggable: true,
              }}
              onDragEnd={(e) => setPointA(e.get("target").geometry.getCoordinates())}
            />
          )}

          {/* Маркер точки Б */}
          {pointB && (
            <Placemark
              geometry={pointB}
              options={{
                iconColor: "blue",
                draggable: true,
              }}
              onDragEnd={(e) => setPointB(e.get("target").geometry.getCoordinates())}
            />
          )}

          {/* Линия маршрута */}
          {route && (
            <Polyline
              geometry={route.geometry.coordinates}
              options={{
                strokeColor: "#000",
                strokeWidth: 4,
              }}
            />
          )}

          {/* Панель маршрутизации */}
          {(pointA && pointB) && (
            <RoutePanel
              options={{
                showHeader: false,
                reverseGeocoding: true,
              }}
              onChange={handleRouteUpdate}
              onClear={clearMap}
              properties={{
                options: {
                  mapStateAutoApply: true,
                },
              }}
              startPoint={pointA}
              endPoint={pointB}
            />
          )}

          {/* Контрол зума */}
          <ZoomControl options={{ size: "small", position: { right: 10, bottom: 50 } }} />
        </Map>
      </div>
    </YMaps>
      );
    };
    export default NewMap;

