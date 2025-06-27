// src/Map.jsx
'use client'
import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Foro } from '../types/types'
const styleLight = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
// const styleLight = 'https://demotiles.maplibre.org/style.json' // Estilo de ejemplo de MapLibre

const Map = ({ plantas }: { plantas: Foro[] }) => {
    const mapContainer = useRef(null)
    console.log('Plantas recibidas en el mapa:', plantas)

    useEffect(() => {
        if (mapContainer.current) {
            const map = new maplibregl.Map({
                container: mapContainer.current,
                style: styleLight, // Puedes cambiar el estilo
                // center: [-78.8814, -1.0461], // [longitud, latitud] - Nueva York
                center: [-78.52495, -0.22985],

                zoom: 10,
            })

            map.on('load', () => {
                plantas.forEach(planta => {
                    const longlat: [number, number] = [
                        Number(planta.Longitud),
                        Number(planta.Latitud),
                    ]
                    console.log('Longitud y latitud de la planta:', longlat)
                    const popup = new maplibregl.Popup({ offset: 25 }).setText(planta.Planta)
                    const el = document.createElement('div')
                    el.className = 'custom-marker'
                    el.innerHTML = `
          <div style="
            background: white;
            padding: 4px 8px;
            border-radius: 6px;
            border: 1px solid #888;
            font-size: 12px;
            font-family: sans-serif;
            box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
            display: inline-block;
          ">
            🌿 ${planta.Planta}
          </div>
        `

                    new maplibregl.Marker({ color: '#228B22', element: el }) // verde tipo planta
                        .setLngLat(longlat) // [longitud, latitud]
                        .setPopup(popup)
                        .addTo(map)
                })
                // 2a. Fuente Raster-DEM (formato TERRARIUM, dominio público)
                map.addSource('dem', {
                    type: 'raster-dem',
                    encoding: 'terrarium',
                    // Azimuth maps AWS open dataset (≈ 30 m SRTM). Sin clave ni registro.
                    tiles: [
                        'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
                    ],
                    tileSize: 256,
                    maxzoom: 13,
                })

                // 2b. Activar terreno 3D (exageración 1.4 ×)
                map.setTerrain({ source: 'dem', exaggeration: 1.4 })

                // 2c. Hillshade para que se vea el relieve aunque no uses pitch alto
                map.addLayer({
                    id: 'hillshade',
                    type: 'hillshade',
                    source: 'dem',
                    paint: {
                        'hillshade-illumination-direction': 335, // sol al NW
                        'hillshade-exaggeration': 0.1,
                    },
                })
                map.setPaintProperty('road', 'line-color', '#ffffff')
                map.setPaintProperty('road', 'line-width', 2)
                // Removed sky layer as it's not supported in MapLibre GL
                // MapLibre doesn't support the 'sky' layer type that exists in Mapbox GL

                // 2e. Marcador en el pueblo
                new maplibregl.Marker({ color: '#d00' }).setLngLat([-78.8814, -1.0461]).addTo(map)
            })

            return () => map.remove() // Limpieza al desmontar
        }
    }, [])

    return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
}

export default Map
