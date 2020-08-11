import React, {Component} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


export default class Person extends Component{
    render(){
        return(
            <div className="four wide column" >
                 <Card
                    image={this.props.image.src}
                    header={this.props.name}
                    meta='Software Engineer'
                    description='Tasks'
                />
            </div>
        )
    }
}