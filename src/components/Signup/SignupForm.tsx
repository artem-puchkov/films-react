import React, { useState } from "react";
import { userInfo } from "../../storage/storage";
import classes from './SignupStyle.module.css';

interface UserSignedUp {
    onSigned: () => void
}

export function SignupForm({ onSigned }: UserSignedUp) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function addUserInfo(event: React.FormEvent) {
        event.preventDefault();
        
        userInfo.setEmail = email;
        userInfo.setPassword = password;

        onSigned();
    }

    return (
        <form>
            <label>Signup Form</label>
            <input 
                type="text"
                name="email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
            <input 
                type="password"
                name="password"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
            <button 
                type="submit"
                onClick={addUserInfo}>Sign up</button>
        </form>
    );
}