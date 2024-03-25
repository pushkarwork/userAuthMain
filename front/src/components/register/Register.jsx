import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook to redirect
import './register.css'; // Import CSS file for component styling
import Navbar from '../Navbar/Navbar';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [work, setWork] = useState('');
    const history = useNavigate(); // Initialize useHistory hook

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send form data to server
            const response = await fetch('http://localhost:5000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, confirmPassword, phoneNumber, work })
            });

            if (response.status === 422) {
                // If registration is unsuccessful, alert the user
                alert('Registration unsuccessful');
            } else {
                // If registration is successful, alert the user and redirect to login page
                alert('Registration successful');
                history('/login'); // Redirect to login page
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit} method="post">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Work:</label>
                        <input type="text" value={work} onChange={(e) => setWork(e.target.value)} />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
