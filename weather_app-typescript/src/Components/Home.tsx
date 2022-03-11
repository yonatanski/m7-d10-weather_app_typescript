import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { ICity } from "../Types/types"

function WeatherInput() {
  const [warsaw, setWarsaw] = useState<ICity>()

  const [london, setLondon] = useState<ICity>()

  const [searchedCity, setSearchedCity] = useState<ICity>()
  const [query, setQuery] = useState("")

  const getWarsawCity = async () => {
    try {
      const res = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=Torun&units=metric&appid=3a1bb83a47a144256eba69e7dd57dc4c")
      if (res.ok) {
        const data = (await res.json()) as ICity
        setWarsaw(data)
        console.log("this is Warsaw", warsaw)
      } else {
        console.log("Something goes wrong during fetch")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getLondonCity = async () => {
    try {
      const res = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=3a1bb83a47a144256eba69e7dd57dc4c")
      if (res.ok) {
        const data = (await res.json()) as ICity
        setLondon(data)
        console.log("this is Warsaw", warsaw)
      } else {
        console.log("Something goes wrong during fetch")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=3a1bb83a47a144256eba69e7dd57dc4c`)
      if (res.ok) {
        const data = (await res.json()) as ICity
        setSearchedCity(data)
      } else {
        console.log("Something goes wrong during fetch")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    getWarsawCity()
    getLondonCity()
  }, [])

  return (
    <>
      <Container>
        <Row className="d-block">
          <Col xs={4} className="mt-4">
            <Form className="d-flex" onSubmit={handleSubmit}>
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="text" placeholder="Type City name Here ...." value={query} onChange={handleChange} />
              <Button type="submit">Search</Button>
            </Form>
          </Col>

          {searchedCity ? (
            <Card className="mt-4 bg-dark">
              <Card.Header>{searchedCity.city.name}</Card.Header>
              <Card.Body>
                <Card.Title>{searchedCity.list[1].weather[0].description} </Card.Title>
                <Card.Title>{searchedCity.list[0].main.temp}C° </Card.Title>
              </Card.Body>
            </Card>
          ) : (
            <>
              <Col xs="12" md="6" style={{ marginTop: "3.5rem" }}>
                <Col xs="12">
                  <Card style={{ backgroundColor: "lightblue", marginBottom: "2rem", borderRadius: "10%", width: "75%" }}>
                    <Card.Img src={`http://openweathermap.org/img/wn/${warsaw?.list[0].weather[0].icon}@2x.png`} />
                    <Card.ImgOverlay>
                      <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "black" }}>{warsaw?.city.name}</Card.Title>
                      <Card.Text>
                        {warsaw?.list[0].weather[0].main} <span style={{ color: "yellow" }}> {warsaw?.list[0].main.temp}C° </span>
                      </Card.Text>
                      <Card.Text style={{ fontSize: "1.2rem", fontStyle: "italic", color: "white", backgroundColor: "black" }}>
                        "{warsaw?.list[0].weather[0].description}"{/* <img src={`http://openweathermap.org/img/wn/${milano?.list[0].weather[0].icon}@2x.png`} alt="" /> */}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col xs="12">
                  <Card style={{ backgroundColor: "lightblue", marginBottom: "2rem", borderRadius: "10%", width: "75%" }}>
                    <Card.Img src={`http://openweathermap.org/img/wn/${london?.list[0].weather[0].icon}@2x.png`} />
                    <Card.ImgOverlay>
                      <Card.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "black" }}>{london?.city.name}</Card.Title>
                      <Card.Text>
                        {london?.list[0].weather[0].main} <span style={{ color: "yellow" }}> {london?.list[0].main.temp}C° </span>
                      </Card.Text>
                      <Card.Text style={{ fontSize: "1.2rem", fontStyle: "italic", color: "white", backgroundColor: "black" }}>
                        "{london?.list[0].weather[0].description}"{/* <img src={`http://openweathermap.org/img/wn/${milano?.list[0].weather[0].icon}@2x.png`} alt="" /> */}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  )
}

export default WeatherInput
