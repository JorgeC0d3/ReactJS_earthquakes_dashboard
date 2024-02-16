import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import EarthquakeMarker from './EarthquakeMarker'

function Map({ earthquakes }) {

    return (

        <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
                earthquakes.map((earthquake, i) => {
                    return (
                        <EarthquakeMarker
                            earthquake={earthquake}
                            key={i}
                        />
                    )

                })
            }
        </MapContainer>
    )
}

export default Map