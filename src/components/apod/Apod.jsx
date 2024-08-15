import React, { useEffect, useState } from 'react';
import "./Apod.css";

function Apod() {
    const APOD_API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
    const API_KEY = 'tKrcqFoKYIr9oXrgkld4CXyEUr0xchIIbFdHsQIA';

    const [apodData, setApods] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${APOD_API_URL}${API_KEY}`);
                const data = await response.json();
                console.log(data);
                setApods(data);  // Ajuste aquí
            } catch (err) {
                console.error(err);
            }
        };
        
        fetchData();
    }, []);

    // Agrega una verificación para asegurarte de que apodData no sea null
    if (!apodData) {
        return <div>Loading...</div>; // O cualquier otro mensaje de carga
    }

    return (
        <div className="apod-container">
            <h1>{apodData.title}</h1>
            {apodData.media_type === 'image' ? (
                <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
            ) : (
                <iframe src={apodData.url} title={apodData.title} frameBorder="0" width="100%" height="500px"></iframe>
            )}
            <p>{apodData.explanation}</p>
        </div>
    );
}

export default Apod;



