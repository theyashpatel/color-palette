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
            <Grid>
                <Grid.Row centered>
                    <Checkbox label="Monkey Colors" />
                </Grid.Row>
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