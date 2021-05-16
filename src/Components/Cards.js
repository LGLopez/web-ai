import React from 'react';
import Card from 'react-bootstrap/Card';
 import Button from 'react-bootstrap/Button';

const CardInfo = ( {img, title, description, redirect} ) => {
    return (
        <Card bg="dark" text="light" style={{ width: '14rem' }}>
            <Card.Img variant = "top" src={img} width="200" height="200"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Button variant="secondary" href={redirect} target="_blank">Ir a Docs</Button>
        </Card>
    );
}

export default CardInfo;