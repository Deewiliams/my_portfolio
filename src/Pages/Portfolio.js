import React from 'react'
import { Table, Container, Button, Col, Row } from 'react-bootstrap';
import data from '../Component/data.json'
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    let navigate = useNavigate();

    const mainPage = () => {
        navigate('/')
    }
    return (
        <Container>
            <br />
            <Row >
                <Col style={{ display: 'flex', justifyContent: 'end' }} >
                    <Button size="lg" onClick={mainPage} >Back</Button></Col>
            </Row>
            <br />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>About the project</th>
                        <th>Project name</th>
                        <th>Organisation</th>
                        <th>Project Link</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((info) => (
                        <>
                            <tr style={{ textAlign: 'left' }} >
                                <td>{info.about}</td>
                                <td>{info.project_name}</td>
                                <td>{info.organisation} </td>
                                <td>{info.project_link} </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Portfolio