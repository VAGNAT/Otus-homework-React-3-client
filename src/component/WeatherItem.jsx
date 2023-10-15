import React from "react";

import { Card } from "react-bootstrap";

const WeatherItem = ({ weather }) => {
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Body className="card-body">
        <Card.Title className="card-title">Date: {weather.date}</Card.Title>
        <Card.Subtitle className="card-subtitle mb-2 text-muted">
          C: {weather.temperatureC}
        </Card.Subtitle>
        <Card.Subtitle className="card-subtitle mb-2 text-muted">
          F: {weather.temperatureF}
        </Card.Subtitle>
        <Card.Text className="card-text">Summary: {weather.summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherItem;
