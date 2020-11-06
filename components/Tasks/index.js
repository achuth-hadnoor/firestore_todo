import React, { useState } from 'react'
import firebase from '../../utils/firebase'
import { useAuth } from '../../hooks/use-auth';
import { useFirestoreQuery } from '../../hooks/use-firestore';
import Loading from '../Loading';
import { TODAY } from '../../utils/constants';
import styled from 'styled-components';
import TasksView from './TasksView';
import TaskSidebar from './TasksSidebar';
import {tasks} from '../../data'
export default function Tasks() {
    const auth = useAuth();
    const [active, setActive] = useState(TODAY);
    // const {data,status,error} = useFirestoreQuery(
    //     firebase.firestore().collection('tasks').where('uid', "==", auth.user.uid).limit(10)
    // ) 
    const [data, setData] = useState(tasks);
    let error;
    let status;
    if(error){
     return <div>{error}</div>
    }
    
    if(status === 'loading'){
        return <Loading/>
    }

        return (
            <TasksWrapper>
                <TaskSidebar active={active} setActive={setActive} tasks={data}/>
                <TasksView active={active} tasks={data}/> 
            </TasksWrapper>
            ) 

} 


const TasksWrapper = styled.div`
    display:flex; 
`;
 