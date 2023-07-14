import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [value,setValue]=useState("")
    const navigate = useNavigate()
    const handleClick = (e: any) => {
        navigate(`/search/:${e}`)
    }
    return (
        <div id="home" style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg") no-repeat center/cover`,
            // background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bNYDRRgmKogbPjhsR0PTPkqITnh.jpg") no-repeat center/cover`,
            boxShadow: "inset 900px 0 0 900px rgba(0,0,0,0.3)",
            width:"100%",
            height:"100vh"
        }}>
            <div className="container">
                <center>
                    <div className="home--logo">
                        <h1>Добро пожаловать.</h1>
                        <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default Home;