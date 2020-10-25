import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'

export default function FuctionHeader() {

    function handleItemClick() {

    }

    const activeItem = 'reload'

    const functionBtnStyle = {
        marginLeft: "5px",
        backgroundColor: "rgba(0,0,0,0.05)"
    }

    return (
        <Menu secondary borderless style={{ height: "100%", borderBottom: "1px solid lightgray", paddingLeft: "7px", paddingRight: "5px" }}>
            <Menu.Item position="right">

                <Button
                    primary
                    basic
                    icon 
                    style={functionBtnStyle}
                    >
                    <Icon name='add' />
                </Button>
                <Button
                    primary
                    basic
                    icon 
                    style={functionBtnStyle}
                    >
                    <Icon name='minus' />
                </Button>
                <Button
                    primary
                    basic
                    icon 
                    style={functionBtnStyle}
                    >
                    <Icon name='refresh' />
                </Button>
            </Menu.Item>
        </Menu>
    )
}
