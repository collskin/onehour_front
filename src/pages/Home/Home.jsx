import React from "react";
import "./home.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Topbar from "../../components/topbar/Topbar";
import Flat from "../../components/flats/Flat";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import {  useState } from "react";
import {usePaginate} from "../../hooks/usePaginate"

export default function Home() {
  const [params, setParams] = useState({
    page: 1,
    limit: 20,
    q: "",
  });
  const [data, setData] = useState([]);


  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  const LatLong = [44.804, 20.4651];

  const handleScroll = (e) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom) {
      setParams((prev) => {
        const copy = { ...prev };
        copy.page = copy.page + 1;
        return copy;
      });
    }
  };
  usePaginate("space/", params, setData)
console.log(data);
  return (
    <div className="home-container">
      <Topbar status={"show"} />
      <div className="home-content">
        <div className="flat-container">
          <div className="flatwrapper" onScroll={handleScroll}>
            {data && data.map((item) => <Flat key={item.id} item={item} />)}
          </div>
        </div>
        <div className="map-container">
          <MapContainer className="leaflet-map" center={LatLong} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data &&
              data.map((item) => (
                <Marker
                  key={item.id}
                  position={[item.lat, item.lng]}
                  icon={DefaultIcon}
                >
                  <Popup>{item.name}</Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
