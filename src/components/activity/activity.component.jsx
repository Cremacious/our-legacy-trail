import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import L from 'leaflet';
import polyline from 'polyline';
import 'leaflet/dist/leaflet.css';
import { ActivityContainer } from './activity.styles';

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
      <h3>Activity in container</h3>
      <p>Activity Name: {name}</p>
      <p>Activity ID: {id}</p>
      <p>Max Speed: {max_speed}</p>
      <p>Photo Count: {photo_count}</p>
      <p>Upload ID: {upload_id}</p>
      <p>Distance: {distance}</p>
      <p>Elapsed Time: {elapsed_time}</p>
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
    </ActivityContainer>
  );
}

export default Activity;
