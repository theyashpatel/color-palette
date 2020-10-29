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
                        disabled
                        icon="undo"
                    />
                    <Button
                        disabled
                        icon="redo"
                    />
                </Button.Group>

                <Button.Group basic style={functionBtnStyle} >
                    <Button
                        disabled={payload.noOfColorViews === 10 ? true : false}
                        icon="add"
                        onClick={payload.addColorView}
                    />
                    <Button
                        disabled={payload.noOfColorViews === 2 ? true : false}
                        icon="minus"
                        onClick={payload.minusColorView}
                    />
                </Button.Group>
                <Button.Group basic style={functionBtnStyle} >
                    <Button
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
