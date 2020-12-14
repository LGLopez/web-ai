import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CardInfo from '../Components/Cards';
// import Button from 'react-bootstrap/Button';

const CardsHolder = ( { forCards } ) => {
    return (
        <Container>
            <Row>
                <Col md="auto">
                    <div className="btn-group-vertical">
                        <Fragment>
                            {
                                    <CardInfo 
                                    key={forCards.id}
                                    title={forCards.title}
                                    description={forCards.description}
                                    redirect={forCards.redirect}
                                    ></CardInfo>
                            }
                        </Fragment>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CardsHolder;