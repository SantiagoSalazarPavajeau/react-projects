import { expect } from 'chai';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import ProjectInput from '../src/components/projects/ProjectInput'
import sinon from 'sinon'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import projectsReducer, { cuidFn } from '../src/reducers/projectsReducer'
import App from '../App'
import Projects from '../src/components/containers/Projects'
import ProjectCard from '../src/components/projects/ProjectCard'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Projects Component', () => {
    it('displays a list of project card components', () => {
  
      const store = createStore(projectsReducer)
      store.dispatch({type: 'ADD_PROJECT', text: "Muzarella"})
      store.dispatch({type: 'ADD_PROJECT', text: "Artichoke"})
      store.dispatch({type: 'ADD_PROJECT', text: "Two Brothers"})
      const wrapper = mount(<Provider store={store}><App /></Provider>)
      expect(wrapper.find(ProjectCard)).to.have.length(3);
    });
  });