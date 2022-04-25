import { MapContainer, TileLayer, useMapEvent, Marker } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import coordinateDTO from './coordinates.model.t';
import { useState } from 'react';

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16,37]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps){

    const [coordinates, setCoordinates] = useState<coordinateDTO[]>([]);

    return(
        <MapContainer
            center={[51.51566402028737, -0.17596659044803806]}
            zoom={14}
            style={{height: props.height}}
        >
            <TileLayer
                attribution='SK React'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick setCoordinates={ coord => {
                setCoordinates([coord]);
            }}
            />
             {coordinates.map((c,i) => <Marker key={i} position={[c.lat, c.lng]}/> )}
        </MapContainer>
    );
}

interface mapProps{
    height: string;
}

Map.defaultProps = {
    height: '500px'
}

function MapClick(props: mapClickProps){
    useMapEvent('click', eventArgs => {
        props.setCoordinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng});
    });
    return null;
}

interface mapClickProps{
    setCoordinates(coordinates: coordinateDTO):void;
}