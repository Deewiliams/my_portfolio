import React from 'react'
import { Card } from 'react-bootstrap';

const CardBar = (props) => {
  return (
    <div>
      <Card.Header>{props.header}</Card.Header>
      <Card>
        <Card.Body>
          <Card.Title> {props.title} </Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardBar