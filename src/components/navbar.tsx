import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import packageObj from "../../package.json"

export const Navbar = () => {
    const [ user ] = useAuthState(auth);
    
    const signUserOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="navbar">
            
            <div className="appName">
                {packageObj.name} version: {packageObj.version}
            </div>

            <div className="links">
                <Link to="/">Main</Link>
                {!user ? (
                    <Link to="/login">Login</Link>
                ) :
                    (
                    <Link to="/createpost">Create Post</Link> 
                )}
            </div>

            <div className="user">
                {user && (
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ""} alt="" width="100" height="100" referrerPolicy="no-referrer" />
                        <button onClick={signUserOut}>Log out</button>
                    </>
                )}
            </div>

        </div>
    );
};