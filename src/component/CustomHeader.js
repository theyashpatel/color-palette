import React from 'react'
import { Header, Divider, Grid, Segment, Image } from 'semantic-ui-react';
import AppLogo from '../images/rang.png'

function CustomHeader(props) {
    return (
        <Segment>
            <Grid columns={2} textAlign='center'>
              <Divider vertical>by</Divider>
              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  {/* <Header className="customHeader" as="h1" color={props.themeColor}>Color Palette Generator</Header>
                   */}
                   <Image verticalAlign="middle" src={AppLogo} size="small" />
                </Grid.Column>
                <Grid.Column>
                  <Header as="h1" color={props.themeColor}><i>Yash Patel</i></Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
      </Segment>
    )
}

export default CustomHeader