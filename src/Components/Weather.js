import React from "react";
import { useState } from "react";
import "../CSS/weather.css";
import { Button } from "react-bootstrap";
import { Row, Col, Container, Form } from "react-bootstrap";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { fetchData } from "../axios/axiosHelper";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [forecast, setforecast] = useState([null]);
  const [hourforecast, sethourforecast] = useState([null]);
  const [city, setCity] = useState("Sydney");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchData(city);
    setWeatherData(data.data.current);
    setLocation(data.data.location);
    setforecast(data.data.forecast.forecastday);
    sethourforecast(data.data.forecast.forecastday[0].hour);
    console.log(data);
  };
  console.log(hourforecast);

  return (
    <>
      <div>
        {" "}
        <label htmlFor="checkbox" className="checkbox">
          <BsFillArrowLeftCircleFill />{" "}
        </label>
        <input type="checkbox" id="checkbox" className="checkbox"></input>
        <Container className="weather-container">
          <input type="checkbox" id="close" className="close"></input>

          <label className="close" htmlFor="close">
            <AiOutlineClose />
          </label>
          <Row className="weatherHeading">
            <h1>Today's Weather</h1>
            <div className="imageBox">
              <img
                src={weatherData && weatherData.condition.icon}
                alt="icon"
                className="icon"
              />
            </div>
          </Row>
          <Row className="search">
            <Form onSubmit={handleOnSubmit} className="weatherForm">
              {" "}
              <input
                type="text"
                className="inputCity"
                placeholder="Enter City Name"
                onChange={handleInputChange}
                defaultValue="Sydney"
              ></input>
              <Button className="submitButton" type="submit">
                Search
              </Button>
            </Form>
          </Row>
          <Row className="weather-card">
            <Col className="location">
              <p className="text1">{location && location.name}</p>
              <p className="text1">{location && location.country}</p>{" "}
              <p className="text">{location && location.localtime}</p>{" "}
              <p className="text1 temp">
                {weatherData && weatherData.temp_c}&#8451;
              </p>{" "}
            </Col>
            <Col className="weather">
              <p className="text1">
                {" "}
                {weatherData && weatherData.condition.text}
              </p>
              <p className="text">
                {weatherData && weatherData.feelslike_c}&#8451;
              </p>
              <p className="text">
                Humidity...........{weatherData && weatherData.humidity}%
              </p>
              <p className="text">
                Wind...{weatherData && weatherData.wind_kph}kph(
                {weatherData && weatherData.wind_dir})
              </p>{" "}
              <p className="text">
                Pressure...{weatherData && weatherData.pressure_in}inHg
              </p>{" "}
            </Col>
          </Row>
          <Row className="forecast">
            {forecast.map((item, i) => (
              <Col className="forecastCard" key={i}>
                <p className="text">{item && item.date}</p>
                <p className="text">{item && item.day.condition.text}</p>
                <p className="text">
                  Min...{item && item.day.mintemp_c}&#8451;
                </p>
                <p className="text">
                  Max...{item && item.day.maxtemp_c}&#8451;
                </p>
              </Col>
            ))}
          </Row>
          <Row className="forecast forecast2">
            <Row className="hourlyForecast">
              {hourforecast.map((item, i) => (
                <Col key={i}>
                  <p className="text">{item && item.time.slice(11)}</p>

                  <img
                    src={item && item.condition.icon}
                    alt="icon"
                    className="icon2"
                  />

                  {/* <p className="text">{item && item.condition.text}</p> */}
                  <p className="text mt-3">{item && item.temp_c}&#8451;</p>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Weather;
