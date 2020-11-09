import React from 'react'
import { useAuth } from '../hooks/use-auth'
import Loading from '../components/Loading';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import {google} from 'react-icons-kit/fa'
export default function login() {
    const auth = useAuth();
    return (
        <LoginWrapper>
            <LoginCard>
                <Logo style={{marginBottom:'30px'}} />
                <LoginOptions>
                    <span className="title"  style={{marginBottom:'30px'}} >Login to Snippy</span>
                    <Button icon={google} text="continue with google" primary onClick={() => {
                                console.log(auth.signinWithGoogle());
                            }}/>
                </LoginOptions> 
            </LoginCard>

        </LoginWrapper>
    )
}

const LoginWrapper = styled.div`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    height: 100%;
    background:linear-gradient(rgb(48 54 49) 0%,rgb(31 35 31) 50%);
}
`;

const LoginCard = styled.div`
    display: flex;
    flex: initial;
    flex-direction: column; 
    align-items: center;
    animation: 0.3s ease 0.2s 1 normal both running comin;
    margin: 181.5px auto auto;
`;

const LoginOptions = styled.div`
    display: flex;
    flex: initial;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    .title{
        ont-style: normal;
        line-height: normal;
        color: rgb(215, 216, 219);
        font-weight: 500;
        font-size: 20px;
        letter-spacing: -0.01em;
    }
`;