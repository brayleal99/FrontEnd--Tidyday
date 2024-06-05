import { useState } from "react"
import Signup from "./Signup"
import Login from "./Login"
import "./Auth.css" ;

const Auth = () => {
    const [active, setActive] = useState(true)
    return (
        <div className="loginContainer">
            <div className="box h-[100vh] w-[100%]">
                <div className="minContainer login">
                    <div className="loginBox ">
                        {active ? <Signup onSignIn={() => setActive(false)} /> : <Login onSignUp={() => setActive(true)} />}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth