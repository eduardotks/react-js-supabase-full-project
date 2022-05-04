import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap
import React, { useState, useEffect } from "react";

function Geolocalizador() {
  //--------------------------------------------------------------
  //estado para armazenar uma localização e função setLocation
  const [location, setLocation] = useState({});
  //--------------------------------------------------------------
  //
  useEffect(() => {
    //api global, note que watchPosition retorna um number
    const watchId = navigator.geolocation.watchPosition(positionReceived);

    //retorna uma função toda vez que o componente for desmontado. a ideia é ser como willunmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  //coords vem da api, e para acessar o objeto deve estar em chaves {coords}
  function positionReceived({ coords }) {
    //
    const { latitude, longitude, accuracy } = coords;
    //
    console.log("latitude ", latitude);
    console.log("longitude ", longitude);
    console.log("accuracy ", accuracy);
    console.log("object ", coords);
    setLocation({ latitude, longitude, accuracy });
  }

  return (
    <div>
        <p>Geo Localizador, permita o navegador buscar a localização</p>
      Latitude: {location.latitude}
      <br />
      Longitude: {location.longitude}
      <br />
      Accuracy: {location.accuracy}
    </div>
  );
}

export default Geolocalizador;
