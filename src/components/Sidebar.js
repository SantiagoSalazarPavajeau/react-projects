import React, {Component} from 'react';

export default class SideBar extends Component{
    render(){
        return(
            <div class="ui inverted vertical labeled icon ui push left thin visible sidebar menu">
                <a class="item">
                    <i aria-hidden="true" class="home icon"></i>
                    Home
                </a>
                <a class="item">
                    <i aria-hidden="true" class="sitemap icon"></i>
                    Projects
                </a>
                <a class="item">
                    <i aria-hidden="true" class="calendar icon"></i>
                    Calendar
                </a>
          </div>
        )
    }
}