import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter';
import { FaMapPin } from 'react-icons/fa';

export default function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  //   console.log(coordinates);

  const center = getCenter(coordinates);
  //   console.log(center);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
    width: '100%',
    height: '100%',
  });

  // transform the search results objects into the {latitude:52.00, longitude:13.7777} object

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/andsem77/cks384ew33gwr17q675vvyzss'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className='cursor-pointer text-2xl animate-bounce'>
              <FaMapPin className='text-red-400' />
            </p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}
