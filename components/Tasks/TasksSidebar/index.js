import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { sun, star, calendar, edit3, atSign } from 'react-icons-kit/feather'

export default function TaskSidebar() {
    return (
        <SidebarContainer>
            <SidebarTitle>Categories</SidebarTitle>
            <SideBarList>
                <SideBarListItem active><IconView icon={sun} style={{ padding: '5px' }} /><span>Today</span> </SideBarListItem>
                <SideBarListItem><IconView icon={star} /> <span>important</span></SideBarListItem>
                <SideBarListItem><IconView icon={calendar} /> <span>Scheduled</span></SideBarListItem>
                <SideBarListItem><IconView icon={atSign} /> <span>Assigned to me</span></SideBarListItem>
                <SideBarListItem><IconView icon={edit3} /> <span>Tasks</span></SideBarListItem>
            </SideBarList>
        </SidebarContainer>
    )
}

const IconView = styled(Icon)`
    padding:5px
`;

const SidebarContainer = styled.div`
    padding: 10px;
    border-radius: 10px;
    max-width: 300px;
    width: 100%;
    `;

const SidebarTitle = styled.div`
    font-size: .7em;
    font-weight:600;
    color:#808080;
    `;

const SideBarList = styled.ul`
    list-style: none; 
    margin: 10px 0px ;
    background: rgba(219,219,219,.3);
    backdrop-filter: blur(9px);
    padding: 15px 10px;;
    border-radius: 10px;
    align-items: center;
    font-size:.9em;
    transition:all 1s ease-in-out;
    .active{
        background: #fff;
        color: #121212;
    }
}
`;

const SideBarListItem = styled.li`
    display: flex;
    border-radius: 5px; 
    align-items:center;
    margin-bottom:5px;
    background:${props=> props.active ? '#fff' : 'transparent'};
    &:hover{
        background:rgba(289,289,289,.4);
    }
    span{
        padding:0px 15px;
    }
`;