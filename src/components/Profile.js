import React, {Component} from 'react';
import { Header, Icon} from 'semantic-ui-react'


export default class Profile extends Component{
    render(){
        return(
            <>
                <Header as='h2' icon textAlign='center'>
                    <i aria-hidden="true" className="users icon left"></i>
                    <Header.Content>Projects</Header.Content>
                </Header>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='settings' circular />
                    <Header.Content>Tasks</Header.Content>
                </Header>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='plug' circular />
                    <Header.Content>Processes</Header.Content>
                </Header>
            </>
        )
    }
}
