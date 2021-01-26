import React from 'react'
import { Carousel } from 'react-bootstrap'
import About from '../about/about'
import Booking from '../booking/booking'
import Contact from '../contact/contact'
import Footer from '../footer/footer'
import Menu from '../menu/menu'

const Home = () => {
    const testData = ['Fist','Second','Third']

    const backgroundImages = 
        <Carousel>
            {testData.map(data=>(
                <Carousel.Item key={data}>
                    <img
                        className="d-block w-100"
                        src={'https://picsum.photos/seed/picsum/200/300'}
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3>{data} slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>

    const breakLine = <><br/><img style={{width:'100%', height:'30px'}} src={'./images/corner27868.png'} alt={''}/><br/></>
    return(
        <>
            {backgroundImages}
            {breakLine}
            <About/>
            {breakLine}
            <Menu/>
            {breakLine}
            <Booking/>
            {breakLine}
            <Contact/>
            {breakLine}
            <Footer/>
        </>
    )
}

export default Home;