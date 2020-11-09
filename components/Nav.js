// Any component that wants auth state
import React from "react";
import styled from "styled-components";
import { useAuth } from "../hooks/use-auth";
import Logo from './Logo'
import Loading from "./Loading";
import { cloud, search,power, command} from 'react-icons-kit/feather'
import IconTooltip from "./Icon"; 

export function Navbar() {
    // Get auth state and re-render anytime it changes
    const { user, signout } = useAuth();
    return (
        <NavbarContainer>
            <Logo ontitle/>
            <span style={{ flex: 1 }} />
            <IconTooltip icon={power} onClick={() => { signout() }} />
            <IconTooltip icon={cloud} />
            <IconTooltip icon={command} />
            <ProfileImg src={user.photoUrl} />
        </NavbarContainer>
    );
}

const NavbarContainer = styled.nav`
    display:flex;
    align-items:center;
    padding: 15px 25px;
    color:#f8f8f8;
`;

const ProfileImg = styled.img`
    height:30px;
    width:30px;
    border-radius:25px;
    border:1px solid indigo;
`;
