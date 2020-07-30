import React, {Component} from 'react';

export default class ProjectCard extends Component{
    render(){
        return(
            <div class="eight wide column" >

            <div class="ui card">
              <div class="image">
                <i aria-hidden="true" class="file alternate icon left"></i>
              </div>
              <div class="content">
                  <a data-testid="text-content" class="header">{this.props.title}</a>
                  <div class="meta">
                    <span class="date">{this.props.started}</span>
                  </div>
                  <div class="description">
                    {this.props.description}
                  </div>
              </div>
              <div class="extra content">
                  <a>
                    <i class="tasks icon"></i>
                    Tasks
                  </a>
              </div>
            </div>
            </div>
        )
    }
}