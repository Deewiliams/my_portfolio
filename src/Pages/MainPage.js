import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import desire from '../Image/desire-image.jpeg'
const MainPage = () => {
    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <Card.Body>
                        <Card.Img variant="top" src={desire} />
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Text>
                        <br />
                        <br />
                        <h1>Hello</h1>
                        <h2>I'm Desire Irankunda</h2>
                        <p>A full stack software engineer</p>
                    </Card.Text>
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage