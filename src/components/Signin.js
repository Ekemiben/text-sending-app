import React from 'react'
import firebase from 'firebase'
import { Button } from 'react-bootstrap';
import auth from '../firebase'

function Signin() {
    function signInWithGoogle(){
        const provider =new firebase.auth.GoogleAuthProvider()
        auth.signinWithPopUp(provider)
    }
  return (
    <div>
        <Button onClick={signInWithGoogle}>Sign in with google</Button>
    </div>
  )
}

export default Signin