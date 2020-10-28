import React from 'react'
import { Button, Header, Menu } from 'semantic-ui-react'
import SettingsPopup from './GenerateView/SettingsPopup'

export default function FunctionHeader({ payload }) {

    const functionBtnStyle = {
        border: "0px"
    }

    const settingsPopupPayload = {
        isIsolated: payload.isIsolated,
        setIsIsolated: payload.setIsIsolated
    }
    return (
        <Menu secondary borderless style={{ height: "100%", borderBottom: "1px solid lightgray", paddingLeft: "7px", paddingRight: "5px" }}>

            <Menu.Item>
                <Header as="h5" style={{ color: "gray", fontFamily: '"Lucida Console", Courier, monospace' }}><i>Press Space Bar to generate pallete.</i>
                </Header>
            </Menu.Item>

            <Menu.Item position="right">

                <SettingsPopup
                    payload={settingsPopupPayload}
                    trigger={
                        <Button.Group basic style={functionBtnStyle}>
                            <Button
                                icon="setting"
                            />
                        </Button.Group>
                    } />
                <Button.Group basic style={functionBtnStyle}>
                    <Button
                        color="black"
                        icon="undo"
                    />
                    <Button
                        color="black"
                        icon="redo"
                    />
                </Button.Group>

                <Button.Group basic style={functionBtnStyle} >
                    <Button
                        disabled={payload.noOfColorViews === 10 ? true : false}
                        color="black"
                        icon="add"
                        onClick={payload.addColorView}
                    />
                    <Button
                        disabled={payload.noOfColorViews === 2 ? true : false}
                        color="black"
                        icon="minus"
                        onClick={payload.minusColorView}
                    />
                </Button.Group>
                <Button.Group basic style={functionBtnStyle} >
                    <Button
                        color="black"
                        icon="refresh"
                        content="Generate"
                        style={functionBtnStyle}
                        onClick={payload.reloadColor}
                    />
                </Button.Group>

            </Menu.Item>
        </Menu>
    )
}
