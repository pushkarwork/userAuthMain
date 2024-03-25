import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

function About() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {

            const response = await fetch('http://localhost:5000/users/ran', {credentials: 'include'});
            // console.log(response)

            if (!response.ok) {

                throw new Error('Failed to fetch data');
            }
            const responseData = await response.text();

            // console.log(responseData)

            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h2>About Page</h2>
            <p>Data from Random Page: {data}</p>
        </div>
    );
}

export default About;
