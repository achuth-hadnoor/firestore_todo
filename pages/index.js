import { Navbar } from "../components/Nav";
import { useAuth } from "../hooks/use-auth";
import Loading from "../components/Loading";
import Tasks from "../components/Tasks";
export default function Home() {
    const { loading } = useAuth();
    if (loading){ console.log(loading);
     return <Loading />};     
    return (
        <>
            <Navbar />
            <Tasks />
        </>
    );
}
