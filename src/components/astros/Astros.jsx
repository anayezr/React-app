import {useEffect, useState} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./Astros.css";

function Astros() {
    const API_URL = "http://api.open-notify.org/astros.json";
    const [astros, setAstros] = useState(null);
    
useEffect(() => {
    const fetchData = async () => {
        const data = await fetch(API_URL);
        const res= await data.json();
        console.log(res);
        setAstros(res.people); 
    };

    
    fetchData().catch((err) => console.error (err));
    }, []);

    console.log(astros);
    return (
        <div className="astros-container">
            {!astros ? (
                <CircularProgress sx={{color:"#271084"}} />
            ) : (
                astros.map((astro, idx) => (
                    <div key={idx} className="card">
                        <h3 className="astro-name">{astro.name}</h3>
                        <p className="astro-craft">{astro.craft}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Astros;