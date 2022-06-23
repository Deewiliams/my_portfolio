import React, { useState, useEffect } from 'react'
import { Table,Container } from 'react-bootstrap';
import data from '../Component/data.json'

const Portfolio = () => {
    return (
        <Container>
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
                            <tr style={{textAlign: 'left'}} >
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