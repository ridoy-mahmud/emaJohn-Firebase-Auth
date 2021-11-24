import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChange, signOut } from "firebase/auth"
import { useEffect } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
    }
    const logout = () => {
        signOut(auth)
            .then(() => {

            })
    }
    useEffect(() => {
        onAuthStateChange(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

    }, [])
    return {
        user,
        signInUsingGoogle,
        logout
    }
}
export default useFirebase;