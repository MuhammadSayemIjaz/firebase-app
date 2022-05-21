import React, { useState , useEffect } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../config/firebase';

export const Register = () => {
    
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPass, setRegisterPass] = useState("");
    const [loginEmail , setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");

    const [user , setUser] = useState({});

    useEffect(() => {
        // setUser(auth.currentUser)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                // console.log(user)
                setUser(user)
                // ...
            } else {
                console.log("user is not signed in")
                setUser({})
                // User is signed out
                // ...
            }
        });
    }, [])
    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth , registerEmail , registerPass);
            console.log(user);
        } catch (error) {
            console.log(`Error`, error.message);
        }
 
    }

    const login = async () => {
        
        try {
            const user = await signInWithEmailAndPassword(auth , loginEmail , loginPass);
            console.log(user);
        } catch (error) {
            console.log(`Error`, error.message);
        }
    }

    const logout = async() => {
    await signOut(auth);
    }

    const emailVerificationButton = () => {
        sendEmailVerification(auth?.currentUser)
            .then(() => {
                console.log("Email sent")
            });
    }

    return (
    <>
        <div>
            <form>
            <h1>Register User</h1>
                <input type="text" placeholder='Email...' onChange={(e) => setRegisterEmail(e.target.value)}/>
                <input type="password" placeholder='Password...' onChange={(e) => setRegisterPass(e.target.value)} />

                <button onClick={register}>Create Users</button>
            </form>
        </div>
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='Email...' onChange={(e) => setLoginEmail(e.target.value)}/>
            <input type="text" placeholder='Password...' onChange={(e) => setLoginPass(e.target.value)}/>
            <button onClick={login}>Login</button>
        </div>
        <div>
            <h1>User Loged In : <i>{user?.email}</i></h1>
            
            <button onClick={logout}>Signout</button>

            <button onClick={emailVerificationButton}>Send Email Verification</button>
        </div>
    </>
  )
}
