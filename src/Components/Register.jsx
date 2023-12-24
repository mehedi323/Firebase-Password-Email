import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const { CreateUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState(' ');
    const [success, setSuccess] = useState(' ');

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('password should be at least one Uppercase')
            return;
        }
        else if(!accepted){
            setRegisterError('Please Accept our terms and conditions')
            return;
        }

        setRegisterError(' ');
        setSuccess(' ')

        CreateUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Register Succesfully')
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.massage)
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div> 
                            <div className='mb-2'>
                                <input className='mr-2' type="checkbox" name="terms" id="terms" />
                                <label htmlFor="terms">Terms and Condition</label>
                            </div> 
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-800">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-800">{success}</p>
                    }
                    <p>New Here Please?<Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;