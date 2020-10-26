import React from 'react';
import { Button, Checkbox, Grid, Header, Popup, Segment } from 'semantic-ui-react';

export default function SettingsPopup({trigger, payload}) {
    return (
        <Popup
            size="large"
            wide
            trigger={trigger} on='click'
            position="bottom center"
        >
            <Grid padded="horizontally">
                <Grid.Row centered>
                    <Checkbox
                        checked={payload.isIsolated}
                        label="Isolate Colors"
                        onChange={() => payload.setIsIsolated(pState => !pState)}
                        />
                </Grid.Row>
            </Grid>
        </Popup>
    )
}