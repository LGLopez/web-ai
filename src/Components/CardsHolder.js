import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardInfo from '../Components/Cards';
// import Button from 'react-bootstrap/Button';

const CardsHolder = ( { forCards } ) => {
    return (
        <Container>
            <Row>
            {
                forCards.map( card => 
                <Col>
                    <Fragment>
                        <CardInfo 
                            key={card.id}
                            img={card.img}
                            title={card.title}
                            description={card.description}
                            redirect={card.redirect}
                        ></CardInfo> 
                    </Fragment>
                </Col>
                )
            }
            </Row>
        </Container>
    );
}

export default CardsHolder;