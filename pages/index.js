import { useAuth } from "../hooks/use-auth";
import Loading from "../components/Loading";
import Tasks from "../components/Tasks";
import Page from "../components/Page";
export default function Home() {
    const { loading } = useAuth();
    if (loading){ 
     return <Loading />};     
    return (
        <Page>
            <Tasks />
        </Page>
    );
}
