import { Marker, Popup, CircleMarker } from 'react-leaflet'
import { Icon } from 'leaflet'
import icon from '../assets/images/icon.png'


function EarthquakeMarker({earthquake}) {

    const customIcon = new Icon({
        iconUrl: icon,
        iconSize: [8, 8]
    })

    return (
        <>
            <Marker position={[earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]} icon={customIcon}>
            </Marker>
            <CircleMarker
                center={[earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]]}
                pathOptions={{ color: 'red' }}
                radius={earthquake.properties.mag * 5}>
                <Popup>
                    {earthquake.properties.place} <br /> <span className='font-bold'>Mag: {earthquake.properties.mag}</span> <br /> Fecha: {new Date(earthquake.properties.time).toLocaleDateString("es-EU")}
                </Popup>
            </CircleMarker>
        </>

    )
}

export default EarthquakeMarker