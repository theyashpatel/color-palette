import React from 'react'
import { Button, Header, Menu, Popup } from 'semantic-ui-react'
import SettingsPopup from './GenerateView/SettingsPopup'

export default function FunctionHeader({payload}) {

    const functionBtnStyle = {
        marginLeft: "5px"
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
                        <Button
                            basic
                            color="black"
                            icon="setting"
                            style={functionBtnStyle}
                        />
                    }/>

                <Button
                    disabled={payload.noOfColorViews === 10 ? true : false}
                    basic
                    color="black"
                    icon="add"
                    style={functionBtnStyle}
                    onClick={payload.addColorView}
                />
                <Button
                    disabled={payload.noOfColorViews === 2 ? true : false}
                    basic
                    color="black"
                    icon="minus"
                    style={functionBtnStyle}
                    onClick={payload.minusColorView}
                />
                <Button
                    basic
                    color="black"
                    icon="refresh"
                    content="Generate"
                    style={functionBtnStyle}
                    onClick={payload.reloadColor}
                />

            </Menu.Item>
        </Menu>
    )
}
