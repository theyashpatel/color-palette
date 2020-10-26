import React from 'react'
import { Button, Header, Menu } from 'semantic-ui-react'

export default function FunctionHeader(props) {

    const functionBtnStyle = {
        marginLeft: "5px"
    }

    return (
        <Menu secondary borderless style={{ height: "100%", borderBottom: "1px solid lightgray", paddingLeft: "7px", paddingRight: "5px" }}>

            <Menu.Item>
            <Header as="h5" style={{ color: "gray", fontFamily: '"Lucida Console", Courier, monospace' }}><i>Press Space Bar to generate pallete.</i>
            </Header>

            </Menu.Item>

            <Menu.Item position="right">

                <Button
                    disabled={props.functions.noOfColorViews === 10 ? true : false}
                    basic
                    color="black"
                    icon="add"
                    content="View"
                    style={functionBtnStyle}
                    onClick={props.functions.addColorView}
                />
                <Button
                    disabled={props.functions.noOfColorViews === 2 ? true : false}
                    basic
                    color="black"
                    icon="minus"
                    content="View"
                    style={functionBtnStyle}
                    onClick={props.functions.minusColorView}
                />
                <Button
                    basic
                    color="black"
                    icon="refresh"
                    content="Generate"
                    style={functionBtnStyle}
                    onClick={props.functions.reloadColor}
                />
                {console.log("Function header: ", props.functions.noOfColorViews)}

            </Menu.Item>
        </Menu>
    )
}
