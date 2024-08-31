import React from "react";
import PropTypes from 'prop-types';

export default function Card(props) {
    
    return <div className="MainDiv">
                <div className = "card1" >
                     {props.label} 
                    <h1>{props.cost}</h1>
                    <label>{props.AisAvailable}&nbsp;&nbsp;{props.planA}</label>
                    <label>{props.BisAvailable}&nbsp;&nbsp;{props.planB}</label>
                    <label>{props.CisAvailable}&nbsp;&nbsp;{props.planC}</label>
                    <label>{props.DisAvailable}&nbsp;&nbsp;{props.planD}</label>
                    <label>{props.EisAvailable}&nbsp;&nbsp;{props.planE}</label>
                    <label>{props.FisAvailable}&nbsp;&nbsp;{props.planF}</label>
                    <label>{props.GisAvailable}&nbsp;&nbsp;{props.planG}</label>
                    <label>{props.HisAvailable}&nbsp;&nbsp;{props.planH}</label>
                    {props.label!=="PRO"&&<button disabled className="cardButton">BUTTON</button>}
                    {props.label==="PRO"&&<button className="cardButton">BUTTON</button>}

              
               </div>
        </div>
}


Card.propTypes = {
    cost: PropTypes.string,
    label: PropTypes.string,
    AisAvailable: PropTypes.string,
    planA: PropTypes.string,
    BisAvailable: PropTypes.string,
    planB: PropTypes.string,
    CisAvailable: PropTypes.string,
    planC: PropTypes.string,
    DisAvailable: PropTypes.string,
    planD: PropTypes.string,
    EisAvailable: PropTypes.string,
    planE: PropTypes.string,
    FisAvailable: PropTypes.string,
    planF: PropTypes.string,
    GisAvailable: PropTypes.string,
    planG: PropTypes.string
};

Card.defaultProps = {
    label: 'Tes Label',
    cost: 'Test Cost',
    planA:'Test Plan'
};

