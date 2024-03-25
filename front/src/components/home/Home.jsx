import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'; // Import your CSS file

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="heading">Welcome to My Website</h1>
                <div className="paragraphs">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod efficitur libero, eu posuere metus pulvinar non...</p>
                    <p>Quisque varius odio eget convallis ullamcorper. Phasellus vel odio ullamcorper, pulvinar dui ut, luctus purus...</p>
                    <p>Integer commodo vel mauris sit amet sodales. Phasellus at libero felis. Vestibulum ante ipsum primis in faucibus orci luctus...</p>
                    <p>Nullam fermentum, ligula et fermentum suscipit, justo est congue turpis, et convallis lorem purus id metus...</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
