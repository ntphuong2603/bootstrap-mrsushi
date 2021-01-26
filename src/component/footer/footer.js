import React from 'react'
import { Container, Row } from 'react-bootstrap'


const Footer = () => {
    return(
        <Container fluid style={{backgroundColor:'gainsboro'}} className='pt-3 pb-3 mb-3'>
            <Row className='justify-content-around mt-2 mb-2'>
                Footer component.
            </Row>
        </Container>
    )
}

export default Footer;