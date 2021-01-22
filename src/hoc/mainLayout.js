import React from 'react'
import { Container } from 'react-bootstrap'

const MainLayout = (props) => {
    return(
        <Container className='mt-3'>
            {props.children}
        </Container>
    )
}

export default MainLayout;