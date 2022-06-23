import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import desire from '../Image/desire-image.jpeg'
const MainPage = () => {
    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <Card.Text>
                        <br />
                        <br />
                        <h1>Hello</h1>
                        <h2>I'm Desire Irankunda</h2>
                        <p>A full stack software engineer</p>
                    </Card.Text>
                    <Card.Text>
                        <br />
                        <br />
                        <p style={{ textAlign: 'left', fontSize: '200' }} >I enjoy working on challenges that help me fulfill the goals of the
                            organisation. I am very passionate about learning new technologies
                            and working with a bigger team to learn new things and share my knowledge
                            with others. I have good communication skills that enable me to develop a good
                            rapport with people around me. I am constantly looking for opportunities to  help me grow my technical skills.</p>
                    </Card.Text>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Projects
                        </Button>
                    </div>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Img variant="top" width={400} src={desire} />
                    </Card.Body>
                </Col>

            </Row>
        </Container>
    )
}

export default MainPage