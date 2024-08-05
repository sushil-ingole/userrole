import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { IUserRole, role } from "../store/rolereducer";
import "./SignIn.scss";
import { useState } from "react";

const SignIn = () => {
    const [name, setName] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignIn = async () => {
        const res = await fetch("https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/");
        if(res) {
            const data = await res.json();
            console.log("data.username, data.role: ", data.username, data.role);
            const userRole: IUserRole = {
                username: data.username,
                role: data.role
            };
            dispatch(role(userRole));
            if(data.role === "user") {
                navigate('/userpage');
            } else if(data.role === "admin") {
                navigate('/adminpage');
            }
        }
    }
    return (
        <form className="sign-in-form">
            <h4>Welcome Again!</h4>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={pass} onChange={(e) => setPass(e.target.value)} id="exampleInputPassword1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSignIn} disabled={name?.length <= 0 && pass?.length <= 0}>Submit</button>
        </form>
    )
}

export default SignIn;