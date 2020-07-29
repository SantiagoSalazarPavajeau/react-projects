import React, {Component} from 'react';

export default class ProjectCard extends Component{
    render(){
        return(
            <div class="ui card">
              <div class="image">
                <i aria-hidden="true" class="file alternate icon left"></i>
              </div>
              <div class="content">
                  <a class="header">React-Redux</a>
                  <div class="meta">
                    <span class="date">Started July 28, 2020</span>
                  </div>
                  <div class="description">
                    Build with project requirements
                  </div>
              </div>
              <div class="extra content">
                  <a>
                    <i class="tasks icon"></i>
                    Tasks
                  </a>
              </div>
            </div>
        )
    }
}