import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API = () => {
    const [Students,setStudents]=useState()
    useEffect(() => {
        async function getStudents() {
            try {
                const response = await axios.get('http://localhost:2000/api/Students');
                setStudents(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching Students:", error);
            }
        }
        getStudents();
    }, []);  
    

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default API
