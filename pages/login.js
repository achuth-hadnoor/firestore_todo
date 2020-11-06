import React from 'react'
import { useAuth } from '../hooks/use-auth'
import Loading from '../components/Loading';

export default function login() {
    const auth = useAuth();
    return (
        <div>{
            auth.loading ? <Loading />
                : <>
                    Login with google mate
                    <button onClick={() => {
                        console.log(auth.signinWithGoogle());
                    }}>
                        signin
                    </button> 
                </>
        }
        </div>
    )
}
