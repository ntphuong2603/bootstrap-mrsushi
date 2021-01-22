import React, { useState } from 'react'
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { MENU_ICON, NAV_MENU } from '../../constant/navbarMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useViewport from '../../tools/viewport';


const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState(NAV_MENU[0].toLowerCase())

    const barMenus = () => {

        const menus = NAV_MENU.map((menu)=>(
            <LinkContainer to={`/${menu.toLocaleLowerCase()}`} key={menu}>
                {selectedMenu === menu ? 
                <Button variant='outline-primary'>{menu}</Button>
                : <Nav.Link variant='primary' onClick={()=>setSelectedMenu(menu)}>{menu}</Nav.Link>
                }
            </LinkContainer>
        ))

        return(
            <Nav className='ml-auto'>
                {menus}
            </Nav>
        )
    }

    const dropdownMenus = () => {

        const menus = NAV_MENU.map((menu,index)=>(
            <LinkContainer to={`/${menu.toLocaleLowerCase()}`} key={menu}>
                <Dropdown.Item onClick={()=>setSelectedMenu(menu)}>
                    <FontAwesomeIcon icon={MENU_ICON[index]}/>{`   ${menu} `} 
                </Dropdown.Item>
            </LinkContainer>
        ))

        return (
            <Dropdown className='ml-auto'>
                <Dropdown.Toggle variant='primary'>
                    <FontAwesomeIcon icon={faBars} color='white'/>
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                    {menus}
                </Dropdown.Menu>
            </Dropdown>
        )
    } 

    const ShowMenus = () => {
        const { width } = useViewport();

        return width <= 700 ? dropdownMenus() : barMenus()
    }

    return(
        <Navbar bg='primary' variant='dark'>    
            <Container>
                <Navbar.Brand>Mr. Sushi</Navbar.Brand>
                {ShowMenus()}
            </Container>
        </Navbar>
    )
}

export default Header;