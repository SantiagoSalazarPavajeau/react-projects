import React from 'react';
import { Input } from 'semantic-ui-react';

const Task = ({description, completed}) => {
   return  <li><Input value={description}/></li>
}

export default Task