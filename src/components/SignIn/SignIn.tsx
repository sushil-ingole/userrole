import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { IUserRole, role } from "../store/rolereducer";
import "./SignIn.scss";

const SignIn = () => {
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
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSignIn}>Submit</button>
        </form>
    )
}

export default SignIn;