import React, { useState } from 'react';
import "./login.css"
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to server
            const response = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formdata)
            });

            if (response.status === 200) {
                // Login successful
                alert('Login successful');
                navigate("/")

                // Redirect to dashboard or home page
            } else {
                // Login unsuccessful
                alert('Login unsuccessful');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} method='post'>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formdata.email} onChange={handleChange} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" name="password" value={formdata.password} onChange={handleChange} placeholder="Password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
