import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import '../style/service/map.scss';
import { useEffect, useState } from 'react';

interface Coord{
    lat: number
    lng: number
}

export default function GeoLocation(){
    const centerOfMoscow: Coord = {
        lat: 55.751244,
        lng: 37.618423
    }

    const [userCoord, setUserCoord] = useState<Coord | null>(null)

    useEffect(() => {
        if(!navigator.geolocation) {
            console.log("Браузер не поддерживает геолокацию")
            return;
        }

        const watchId = navigator.geolocation.watchPosition((pos) => {
            setUserCoord({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
        },
        (error) =>{
            console.error("Ошибка при получении координат: ", error);
        },
        {enableHighAccuracy: true}
        )

        return () => navigator.geolocation.clearWatch(watchId)
    })

    return(
        <div className='location-container'>
            <h1>Карта мира</h1>
            <MapContainer 
                center={centerOfMoscow}
                zoom={13} 
                className='map-container'
                scrollWheelZoom={true}
            >
                <TileLayer
                    url=" https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={centerOfMoscow}>
                    <Popup>
                        Москва. Центр города.
                    </Popup>
                </Marker>
                {userCoord && (
                    <Marker 
                        position={[userCoord.lat, userCoord.lng]}
                        
                    >
                        <Popup>
                            Твоя текущая позиция
                        </Popup>
                    </Marker>
                )}

            </MapContainer>
        </div>

    );

}