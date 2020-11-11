import React from 'react'
import styled from 'styled-components'
import TaskSidebar from '../Tasks/TasksSidebar' 
import Logo from '../Logo'

export default function Sidebar() {
    return (
        <SidebarWrapper>
            <Logo ontitle/>
            <TaskSidebar/>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
    max-width:300px;
    height:100%;
    width:100%;
    padding:10px;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width: 500px) {
        &{
            display:none;
        }   
    }
`