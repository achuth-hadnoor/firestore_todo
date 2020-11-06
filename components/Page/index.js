import React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/use-auth'
import Loading from '../Loading';


export default function Page({children}) {
  const {user}  = useAuth();
  const Router = useRouter();
  if(!user){
      Router.replace('/login');
      return(<Loading/>)
  }
    return (
        <>
            {children}
        </>
    )
}
