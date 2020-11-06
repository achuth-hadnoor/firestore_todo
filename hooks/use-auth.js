import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie'; 
import firebase, { getUser } from '../utils/firebase'
import Theme from '../utils/theme'
import Loading from '../components/Loading';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{
        auth.loading ?
            <Loading/>:
            <Theme darkmode={auth.user.darkmode}>     
                {children}
            </Theme>
    }</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleUser = async (rawUser) => {
        if (rawUser) { 
            let {uid,...userWithoutToken} = rawUser;            
            let user = await getUser( uid, userWithoutToken );
            setUser(user);

            cookie.set('slate-auth', true, {
                expires: 1
            });

            setLoading(false);
            Router.replace('/')
        } else {
            setUser(false);
            cookie.remove('slate-auth');

            setLoading(false);
            return false;
        }
    };
 
    const signinWithEmail = (email, password) => {
        setLoading(true);
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                handleUser(response.user);
                Router.push('/sites');
            });
    };

    const signinWithGitHub = (redirect = '/') => {
        setLoading(true);
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                handleUser(response.user);
                if (redirect) {
                    Router.push(redirect);
                }
            });
    };

    const signinWithGoogle = (redirect) => {
        setLoading(true);
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                handleUser(response.user);
                if (redirect) {
                    Router.push(redirect);
                }
            });
    };

    const updateUser = async (newUser)=>{
        let _user = {
            ...newUser,
            updatedAt: new Date().toISOString(),
        }
        setUser(_user) 
        await firebase.db.doc(`users/${user.uid}`).update(_user);
        Router.replace(`/slate/${user.slate}`)
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
        return () => unsubscribe();
    }, []);

    const signout = () => {
        Router.push('/login');
       return firebase
            .auth()
            .signOut()
            .then(() => {
                handleUser(false);
                localStorage.clear();
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        loading,
        signinWithEmail,
        signinWithGitHub,
        signinWithGoogle,
        signout,
        updateUser
    };
}