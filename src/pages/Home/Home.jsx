import React from 'react'
import "./home.css"
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Topbar from '../../components/topbar/Topbar'
import Flat from '../../components/flats/Flat';



export default function Home() {
  return (
    <div className='home-container'>
        <Topbar status={"show"}/>
        <div className="home-content">
            <div className="flat-container">
                <div className="flatwrapper">
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>
                  <Flat/>   
                  <Flat/>
                  <Flat/>
                  <Flat/>
                </div>
            </div>
            <div className="map-container">
            <MapContainer  className='leaflet-map' center={[44.804,20.4651]} zoom={13}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                </MapContainer>
            </div>
        </div>
    </div>
  )
}
