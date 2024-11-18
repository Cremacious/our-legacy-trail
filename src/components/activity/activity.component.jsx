import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import L from 'leaflet';
import polyline from 'polyline';
import 'leaflet/dist/leaflet.css';
import { ActivityContainer, ActivityCard, ActivityCardContent } from './activity.styles';

function Activity({ activity }) {
  const {
    name,
    id,
    max_speed,
    photo_count,
    upload_id,
    distance,
    elapsed_time,
    map,
  } = activity;

  const decodedPolyline = map ? polyline.decode(map.summary_polyline) : [];
  const polylineLatLngs = decodedPolyline.map((point) =>
    L.latLng(point[0], point[1])
  );

  return (
    <ActivityContainer>
      <ActivityCard>
        {map && (
          <MapContainer
            style={{ height: '400px', width: '100%' }}
            center={polylineLatLngs[0]}
            zoom={13}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polyline positions={polylineLatLngs} color="blue" />
          </MapContainer>
        )}
        <ActivityCardContent>
          <h4>{name}</h4>
          <p>Distance: {distance}</p>
          <p>Time: {elapsed_time}</p>
          <p>Max Speed: {max_speed}</p>
          <p>Photos: {photo_count}</p>
          <button>Read More!</button>
        </ActivityCardContent>
      </ActivityCard>
    </ActivityContainer>
  );
}

export default Activity;
