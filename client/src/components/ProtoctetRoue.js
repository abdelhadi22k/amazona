import React, { useContext } from 'react'
import { Store } from '../store/store'
import { Navigate } from 'react-router-dom'

const ProtoctetRoue = (Children) => {
    const {state} = useContext(Store)
    const {userInfo } = state
  return userInfo ? Children : <Navigate to="signin" /> 
}

export default ProtoctetRoue
