import React, { useContext, useState } from 'react'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/context'
import {decodeToken} from 'react-jwt'

const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']



export default function App() {

  const {state,dispatch} = useContext(GlobalContext)

  const getDecodeToken = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res
     
    }
  }
 
  const currentToken = getDecodeToken(state.token)
 
  const CurrentUser = getUserRole(currentToken?.Role)
  return <CurrentUser />
}