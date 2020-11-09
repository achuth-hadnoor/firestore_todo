import React, { useState } from 'react'
import firebase from '../../utils/firebase'
import { useAuth } from '../../hooks/use-auth';
import { useFirestoreQuery } from '../../hooks/use-firestore';
import Loading from '../Loading';
import { TODAY } from '../../utils/constants';
import styled from 'styled-components';
import TasksView from './TasksView';
import TaskSidebar from './TasksSidebar';
import { tasks } from '../../data'

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks,
            active: TODAY
        }
    }
    render() {
        let { active,tasks } = this.state;
        return (
            <TasksWrapper>
                <TaskSidebar active={active} setActive={(view) => { this.setState(view) }} tasks={tasks} />
                <TasksView active={active} tasks={tasks} />
            </TasksWrapper>
        )
    }
}
const TasksWrapper = styled.div`
display:flex; 
`;

export default Tasks;