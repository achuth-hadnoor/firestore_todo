import styled from "styled-components";

import Tasks from "../components/Tasks";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";

export default function Home() {  
    return (
        <Page>
            <Container>
                <Sidebar/>
                <Tasks/>
            </Container>
        </Page>
    );
}

const Container = styled.div`
    display:flex;
    height:100%; 
`;