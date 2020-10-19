import React from 'react'
import { Header, Divider, Grid, Segment } from 'semantic-ui-react';

function CustomHeader(props) {
    return (
        <Segment padded="very">
            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>by</Divider>
              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Header className="customHeader" as="h1" color={props.themeColor}>Color Palette Generator</Header>
                </Grid.Column>
                <Grid.Column>
                  <Header as="h1" color={props.themeColor}>Yash Patel</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
      </Segment>
    )
}

export default CustomHeader