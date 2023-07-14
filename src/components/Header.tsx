import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const handleClick = (e: any) => {
        navigate(`/search/:${e}`)
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}><h1 style={{
                        color:"white"
                    }}>RUDI</h1></NavLink>
                    <div className="header--nav">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/popular'}>Popular</NavLink>
                        <NavLink to={'/now-playing'}>Now-Playing</NavLink>
                        <NavLink to={'/top-rated'}>Top-Rated</NavLink>
                    </div>

                    <input className="header--input" type="text" placeholder="search..."
                           onChange={event => setValue(event.target.value)} onKeyDown={(event) => {
                        if (event.key === 'Enter') handleClick(value)
                    }}  />
                    <div >
                        {/*<button style={{*/}
                        {/*     borderRadius: "6px",*/}
                        {/*    padding: '5px',*/}
                        {/*    cursor: "pointer",*/}
                        {/*}}>dark mode</button>*/}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;