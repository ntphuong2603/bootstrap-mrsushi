import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './component/header/header'
import MainLayout from './hoc/mainLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './component/home/home'
import About from './component/about/about'
import Menu from './component/menu/menu'
import Booking from './component/booking/booking'
import Login from './component/login/login'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/menu' component={Menu}/>
                    <Route path='/booking' component={Booking}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routes;