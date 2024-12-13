import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SideBar from "./SideBar";

const MainContent = ({ query }) => {
  const [result, setResult] = useState([]);
  const fetchData = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        setResult(data.data);
        console.log(data);
      })
      .catch((err) => {
        <Alert>ERRORE NELLA CHIAMATA</Alert>;
      });
  };

  useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <>
      <main className="col-9 col-md-9 col-lg-9 col-xl-10 col-md-9 p-0  ">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex mb-5">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>

        <div className="row">
          {result.map((result) => {
            return (
              <Col
                key={result.id}
                className="col-6 col-xs-6 col-md-4 col-lg-4 col-xl-3  p-3  "
              >
                <Card>
                  <Card.Img variant="top" src={result.album.cover_medium} />
                  <Card.Body>
                    <Card.Title>{result.artist.name}</Card.Title>
                    <Card.Text>Album: {result.album.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default MainContent;
