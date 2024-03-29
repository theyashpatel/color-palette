import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Menu } from 'semantic-ui-react'

export default function TopHeader(props) {

    const [activeItem, setActiveItem] = useState("generate")

    useEffect(() => {
        setActiveItem(() => {
            const currentItem = window.location.pathname.slice(1,)
            if (currentItem === "") return "generate"
            return currentItem
        })
    }, [])

    function handleItemClick(event, result) {
        setActiveItem(() => {
            return result.name
        })
    }

    const menuItemStyle = {
        fontWeight: "bold"
    }

    return (
        <Menu  secondary borderless style={{ height: "100%", borderBottom: "1px solid lightgray", paddingLeft: "7px", paddingRight: "7px" }}>

            <Menu.Item
                className="applicationlogo"
                as={Link}
                to="/"
                name='generate'
            >
                <Header as="h1" style={{ color: "black", letterSpacing: "5px", fontFamily: '"Lucida Console", Courier, monospace' }}><i>VIBGYOR</i></Header>
            </Menu.Item>

            <Menu.Item
                className="topHeaderButton"
                as={Link}
                to="/generate"
                position="right"
                name='generate'
                active={activeItem === 'generate'}
                onClick={handleItemClick}
                style={menuItemStyle}
            />
            <Menu.Item
                className="topHeaderButton"
                as={Link}
                to="/explore"
                name='explore'
                active={activeItem === 'explore'}
                onClick={handleItemClick}
                style={menuItemStyle}
            />
        </Menu>
    )
}
