import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import WeatherItem from "./WeatherItem";
import Api from "../Api/Api";

const Weather = () => {
  const api = new Api();

  const [weathers, setWeathers] = useState([]);

  console.log(weathers);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    api
      .getWeatherList()
      .then((response) => setWeathers(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row>
        <Col>
          {weathers.map((weather) => (
            <WeatherItem key={weather.date} weather={weather} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
