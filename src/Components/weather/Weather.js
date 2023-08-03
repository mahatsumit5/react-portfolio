import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col, Form, Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "./weatherAction";
import "../../CSS/weather.css";
export const Weather = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { weather } = useSelector((state) => state.localStorageWeatherData);
  const [weatherData, setWeatherData] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [forecast, setforecast] = useState([]);
  const [hourforecast, sethourforecast] = useState([]);
  const [city, setCity] = useState("");
  useEffect(() => {
    setWeatherData(weather.current);
    setLocation(weather.location);

    try {
      setforecast(weather.forecast.forecastday);
      sethourforecast(weather.forecast.forecastday[0].hour);
    } catch (error) {}
  }, [weather]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(getWeatherData(city));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 checkbox">
        <i class="fa-sharp fa-solid fa-cloud"></i>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdrop={false}
        scroll="true"
        className="weather-container"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {weatherData && (
              <img
                src={weatherData.condition.icon}
                alt="icon"
                className="icon"
              />
            )}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="">
            <Form onSubmit={handleOnSubmit} className="weatherForm">
              <input
                type="text"
                className="inputCity"
                placeholder="Enter City Name"
                onChange={handleInputChange}
              ></input>
              <Button className="submitButton" type="submit">
                Search
              </Button>
            </Form>
          </Row>

          <Row className="weather-card">
            {weatherData && (
              <>
                <Col className="location">
                  <p className="text1">{location && location.name}</p>
                  <p className="text1">{location && location.country}</p>{" "}
                  <p className="text">{location && location.localtime}</p>{" "}
                  <p className="text1 temp">
                    {weatherData && weatherData.temp_c}&#8451;
                  </p>
                </Col>
                <Col className="weather">
                  <p className="text1">
                    {weatherData && weatherData.condition.text}
                  </p>
                  <p className="text">
                    {weatherData && weatherData.feelslike_c}&#8451;
                  </p>
                  <p className="text">
                    {weatherData &&
                      "Humidity..........." + weatherData.humidity + "%"}
                  </p>
                  <p className="text">
                    {weatherData && " Wind..." + weatherData.wind_kph + "kph"}
                    {weatherData && weatherData.wind_dir}
                  </p>{" "}
                  <p className="text">
                    Pressure...{weatherData && weatherData.pressure_in}inHg
                  </p>{" "}
                </Col>
              </>
            )}
          </Row>
          {weatherData && (
            <>
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
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer />
    </>
  );
};
