import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { sun, star, calendar, edit3, atSign, x } from 'react-icons-kit/feather'
import { TODAY, TASKS, ASSIGNED, SCHEDULED, STARRED } from '../../../utils/constants'
import { menu } from 'react-icons-kit/feather'
import Logo from '../../Logo'

export default function TaskSidebar({ active, setActive }) {
    const [open, setOpen] = React.useState(false);
    return (
        <SidebarWrapper>
            <Logo ontitle/>
            <SidebarContainer open={open}> 
            <Icon icon={menu} style={{ padding: '10px' }} onClick={() => { setOpen(!open) }} className="menu" />

                <SidebarTitle>Categories</SidebarTitle>
                <SideBarList>
                    <SideBarListItem
                        active={active === TODAY ? true : false}
                        onClick={() => { setActive(TODAY); setOpen(!open) }}
                    >
                        <IconView icon={sun} style={{ padding: '5px' }} />
                        <span>Today</span>
                    </SideBarListItem>
                    <SideBarListItem
                        active={active === STARRED ? true : false}
                        onClick={() => { setActive(STARRED); setOpen(!open) }}
                    >
                        <IconView icon={star} />
                        <span>important</span>
                    </SideBarListItem>
                    <SideBarListItem
                        active={active === SCHEDULED ? true : false}
                        onClick={() => { setActive(SCHEDULED); setOpen(!open) }}
                    >
                        <IconView icon={calendar} />
                        <span>Scheduled</span>
                    </SideBarListItem>
                    <SideBarListItem
                        active={active === ASSIGNED ? true : false}
                        onClick={() => { setActive(ASSIGNED); setOpen(!open) }}
                    >
                        <IconView icon={atSign} />
                        <span>Assigned to me</span>
                    </SideBarListItem>
                    <SideBarListItem
                        active={active === TASKS ? true : false}
                        onClick={() => { setActive(TASKS); setOpen(!open) }}
                    >
                        <IconView icon={edit3} />
                        <span>Tasks</span>
                    </SideBarListItem>
                </SideBarList>
            </SidebarContainer>

        </SidebarWrapper>
    )
}

const IconView = styled(Icon)`
    padding:5px; 
}
`;

const SidebarWrapper = styled.div`
display:block;
.menu{
    display:block;
    z-index:9999;
    @media only screen and (max-width: 500px) {
        display:none;
    }
}
 `;

const SidebarContainer = styled.div`    
    padding: 10px;
    border-radius: 10px;
    width:300px;
    @media only screen and (max-width: 500px) {
    & {     
       display:${({ open }) => open ? 'block' : 'none'};
       position:absolute;
       top:0px;
       left:0px;
       align-items:center;
       background: rgba(0, 0, 0, 0.35);
       backdrop-filter: blur(10px);
       height:100%;
       width:100%;   
       opacity:0;
        animation: 0.3s ease 0.2s 1 normal both running comin; 
        }
    }
    
    `;

const SidebarTitle = styled.div`
    font-size: .7em;
    font-weight:600;
    color:#808080;
    padding-top:0px;    
    
    @media only screen and (max-width: 500px) {
    & {
           padding-top:30px;  
    }
    `;

const SideBarList = styled.div`
    list-style: none; 
    margin: 10px 0px ;
    color:#f8f8f8;
    background: rgba(50, 50, 50, 0.37);
    backdrop-filter: blur(9px);
    padding: 15px 10px;;
    border-radius: 10px;
    align-items: center;
    font-size:.9em;
    transition:all .4s ease-in-out;
    .active{
        background: #fff;
        color: #121212;
    }
    
}
`;

const SideBarListItem = styled.button`
    display: flex;
    width:100%;
    border-radius: 5px; 
    align-items:center;
    margin-bottom:5px;
    color:#fefefe;
    background:${props => props.active ? '#171717' : 'transparent'};
    &:hover{
        background:#171717;
    }
    span{
        padding:0px 15px;
    }
    `;
    // background:rgb(255 255 255 / 5%);