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
            <Logo />
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
    padding:5px 10px;
    align-items:center;
    margin: 15px 5px;
`;

const ProfileImg = styled.img`
    height:30px;
    width:30px;
    border-radius:25px;
    border:1px solid indigo;
`;
