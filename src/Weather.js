import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `weather in ${response.data.name} is ${response.data.main.temp} degrees`
    );
  }

  let key = "a710bd8bd76400c9658ef649d9e81728";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}`;

  axios.get(apiUrl).then(handleResponse);
}
