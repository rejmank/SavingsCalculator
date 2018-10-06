import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
    return (
        <span>
            <input 
                required
                value={props.name} 
                onChange={(val)=>props.onNameChange(val, props.thing.id)} 
                placeholder="name of thing"/>
            <input 
                required
                type="number"
                min='1'
                value={props.amount} 
                onChange={(val)=> props.onValueChange(val, props.thing.id)} 
                placeholder="needed fundings"/>
            <input 
                required
                type="number"
                min='1'
                value={props.weeks} 
                onChange={(val)=> props.onMonthsChange(val, props.thing.id)} 
                placeholder="months"/>
            <button 
                onClick={() => props.onButtonClick(props.thing.id)}>-
                </button>
        </span>
    )
}


export default Input