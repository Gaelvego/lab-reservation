import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        }catch (err) {
            console.error(err)
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        }catch (err) { 
            console.error(err)
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
        }catch (err) { 
            console.error(err)
        }
    };

    return (
        <div>
            <input 
                placeholder="Email.."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password.."
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logOut}>Log Out</button>

        </div>
    )
}