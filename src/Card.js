import React from 'react'
import './App.css';

export const Card = (props) => {
    return (
        <div className="card">
            <div className="container">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'100%'}}/>

                <h4><b>{props.name}</b></h4>
                <p>Work Status: {props.title}</p>
                <p>{props.children}</p>
            </div>
        </div>
    )
}
export default Card