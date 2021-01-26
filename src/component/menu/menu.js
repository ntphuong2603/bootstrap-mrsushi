import React, { useEffect, useState } from 'react'
import { Button, Card, CardDeck, CardGroup, Form, Tab, Tabs } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import useViewport from '../../tools/viewport'
import * as menuAction from '../../store/actions/menuActions'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Menu = () => {
    const {menus, categories} = useSelector(state=>state.menus)
    const dispatch = useDispatch();

    const [selected, setSelected] = useState('teriyaki')
    const [viewCat, setViewCat] = useState(true)
    const [viewCus, setViewCus] = useState(false)
    const { width } = useViewport();

    const categoryTabs = (categories, menus) => (
        <Tabs defaultActiveKey={selected} id='menu-tab' onSelect={(cat)=>setSelected(cat)}>
            {categories.map((cat)=>(
                <Tab key={cat} eventKey={cat} title={cat[0].toLocaleUpperCase()+cat.slice(1,)}>
                    {menus ? showMenu(menus) : null}
                </Tab>
            ))}
        </Tabs>
    )
    
    const categoryOpts = (categories, menus) => (
        <>
            <Form.Group>
                <Form.Control as='select' defaultValue={selected} onChange={(event)=>{setSelected(event.currentTarget.value)}}>
                    {categories.map((cat)=>(
                        <option key={cat} value={cat}>{cat[0].toLocaleUpperCase() + cat.slice(1,)}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            {menus ? showMenu(menus) : null}
        </>
    )

    const showCategories = (menus, categories, width) => (
        <>
            <Form.Row className='justify-content-around mb-3'>
                <Form.Check type='checkbox' defaultChecked={viewCat} onChange={()=>setViewCat(!viewCat)} label='Category'/>
                <Form.Check type='checkbox' onChange={()=>setViewCus(!viewCus)} label='Customer'/>
            </Form.Row>
            {width <= 700 ? categoryOpts(categories, menus) : categoryTabs(categories, menus)}
        </>
    )

    useEffect(()=>{
        dispatch(menuAction.getCategories_Menus())
    },[dispatch])

    const showMenu = (menus) => (
        <ResponsiveMasonry columnsCountBreakPoints={{370: 2, 900: 4}} gutter={0} className='justify-content-center'>
            <Masonry>
                {menus.filter(menu=>menu.cat===selected).map(menu=>(
                <Card className='m-1' key={menu.code} border='danger'>
                    <Card.Header className='p-2'>
                        <span>{menu.name}</span>
                        <Card.Title className='text-right mb-0'>{menu.price} $</Card.Title>
                    </Card.Header>
                    <Card.Img src="https://picsum.photos/seed/picsum/100"/>
                    <Card.Footer className='p-1'>
                        <Button size='sm'>Order</Button>

                    </Card.Footer>
                </Card>))}
            </Masonry>
        </ResponsiveMasonry>
    )

    return(
        <>
            {categories && menus ? showCategories(menus, categories, width) : null}
            <br/>
            View menu by : Category: {viewCat ? 'true':'false'}
            <br/>
            View menu by : Customer: {viewCus ? 'true':'false'}
        </>
    )
}

export default Menu;