import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserLock } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return(
        <Container>
            <Row className='justify-content-md-center'>
                <Col sm='auto' lg='5' md='7'>
                        <Button block variant='light' disabled>
                            <FontAwesomeIcon icon={faUserLock} size='3x'/>
                        </Button>
                    <Form className='mt-3'>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text' placeholder='Username input'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check type='checkbox' label='Remember me'/>
                        </Form.Group>
                        <Button block size='lg'>
                            Login {' '}
                            <FontAwesomeIcon icon={faSignInAlt}/>
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;