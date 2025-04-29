import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import "./Map.css"

const Map = ({style, layer, lat, long, zoom}) => {

    // Initialize map
    const mapRef = useRef();
    const mapContainerRef = useRef();

    useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2NhcnBlbmUiLCJhIjoiY205bm9xZWFyMHJ6eDJrcHZkYzM2bGZqOCJ9.LEI9emy53RBZ5pYfJA7D_A'
    mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: style,
        center: [Number(lat), Number(long)],
        zoom: Number(zoom)
    });

    // If user clicks on one of our location markers, show address of location
    mapRef.current.on('click', (event) => {
        const features = mapRef.current.queryRenderedFeatures(event.point, {
            layers: [layer]
        });
    
        // If the user clicks on any spot besides a marker
        if (!features.length) {
            return;
        }

        const feature = features[0];
    
        // Create popup for that marker with the location's name and addr
        new mapboxgl.Popup({ offset: [0, -15] })
            .setLngLat(feature.geometry.coordinates)
            .setHTML(
            `<h3>${feature.properties.name}</h3><p>${feature.properties.addr}</p>`
            )
            .addTo(mapRef.current);
    });

    // Clean up map nicely
    return () => {
        mapRef.current.remove()
        }
    }, [style, layer])

    // Display map
    return (
        <div id='map-container' ref={mapContainerRef}/>
    )

}

export default Map;