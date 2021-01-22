import { faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Col, Container, Form,Row } from 'react-bootstrap'

const Booking = () => {
    return(
        <Container>
            <Row className='justify-content-md-center'>
                <Col lg='6' md='8'>
                    <Form>
                        <Button block variant='light' disabled>
                            <FontAwesomeIcon icon={faUserTag} size='3x'/>
                        </Button>
                        <Form.Row className='mt-3'>
                            <Form.Group className='col-md-12 col-lg-6'>
                                <Form.Control type='text' placeholder='First name'/>
                            </Form.Group>
                            <Form.Group className='col-md-12 col-lg-6'>
                                <Form.Control type='text' placeholder='Last name'/>
                            </Form.Group>
                            <Form.Group className='col-md-12 col-lg-6'>
                                <Form.Control type='email' placeholder='Email address'/>
                            </Form.Group>
                            <Form.Group className='col-md-12 col-lg-6'>
                                <Form.Control type='text' placeholder='Phone number'/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Booking;