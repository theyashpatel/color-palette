import React from 'react'
import { Segment, Select } from 'semantic-ui-react'

function CustomThemeSelect(props) {
    const themeOptions = [
        {value: 'red', text: 'Red' },
        {value: 'orange', text: 'Orange' },
        {value: 'yellow', text: 'Yellow' },
        {value: 'olive', text: 'Olive' },
        {value: 'green', text: 'Green' },
        {value: 'teal', text: 'Teal' },
        {value: 'blue', text: 'Blue' },
        {value: 'violet', text: 'Violet' },
        {value: 'purple', text: 'Purple' },
        {value: 'pink', text: 'Pink' },
        {value: 'brown', text: 'Brown' },
        {value: 'grey', text: 'Grey' },
        {value: 'black', text: 'Black' }
      ]
    return (
        <Segment textAlign="center">
          <Select name="themeSelector" placeholder='Select Theme' value={props.theme} onChange={props.handleTheme} options={themeOptions} />
        </Segment>
    )
}

export default CustomThemeSelect