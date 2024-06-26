import { useState } from "react";
import Input from "../Components/Inp";
import Button from "../Components/btn";
import Navbar from "../Components/new-nav"; // Updated import

export default function Dame3() {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Navbar value1="Signup" path="/Singup" value2="Home" path2="/" />
            <div style={{ margin: '0 auto', maxWidth: '400px', padding: '20px' }}>
                <h1>Login</h1>
                <Input
                    className="rounded-3 border-primary"
                    placeholder="Email or Phone number"
                    onChange={(e: any) => setEmailOrPhone(e.target.value)}
                />
                <br />
                <br />
                <Input
                    className="rounded-3 border-primary"
                    placeholder="Password"
                    type="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <Button
                    name="Submit"
                    className="btn btn-primary rounded-3"
                    onClick={() => console.log(emailOrPhone, password)}
                />
            </div>
        </>
    );
}
