import React from 'react';
import { Header, Button, Grid } from 'semantic-ui-react'


const ProjectInfo = (props) => {
    return(
        <>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Button basic secondary content="Edit Project" labelPosition='right' icon="pencil" onClick={e => props.startEdit(e)} ></Button>                               
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                        <Button basic content="Exit Project Page"  onClick={ e => props.handleHideTasksModal(e)} secondary ></Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
            <Header>{props.project.title}</Header>
            <p>{props.project.description}</p>
              
        </>     
    )
}

export default ProjectInfo;