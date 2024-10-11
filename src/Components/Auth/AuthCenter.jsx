import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import auth from '../FireBase/_firebase';

export const AuthContext = createContext(null);
const AuthCenter = ({children}) => {
 const [Users ,setUsers] = useState(null);
const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}
const loginUser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
const logoutUser =()=>{
    return signOut(auth);
}
useEffect(()=>{
const Unsubscribe = onAuthStateChanged(auth,currentUser=>{
setUsers(currentUser)

})
return ()=> Unsubscribe();
},[])
const doc ={
    createUser,
    loginUser,
    logoutUser,
    setUsers,
    Users
}
    return (
        
        <AuthContext.Provider value={doc}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthCenter;