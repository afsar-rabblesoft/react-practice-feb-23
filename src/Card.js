import React from 'react'
import './App.css';

export const Card = (props) => {
    return (
        <div className="card">
            <div className="container">
                <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />

                <h4><b>{props.name}</b></h4>
                <input type="text" value={props.name} onChange={props.onChangeName}/>
                <p><button className="button button-red" onClick={props.onDelete}>Delete  </button></p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}
export default Card