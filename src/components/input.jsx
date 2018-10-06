import React from 'react'
import { StyledInput, StyledButton } from './styles'

const Input = (props) => {
	return (
		<span>
			<StyledInput 
				required
				value={props.name} 
				onChange={(val)=>props.onNameChange(val, props.thing.id)} 
				placeholder="Na co chcete šetřit?"/>
			<StyledInput 
				required
				type="number"
				min='1'
				value={props.amount} 
				onChange={(val)=> props.onValueChange(val, props.thing.id)} 
				placeholder="Kolik je potřeba?"/>
			<StyledInput 
				required
				type="number"
				min='1'
				value={props.weeks} 
				onChange={(val)=> props.onMonthsChange(val, props.thing.id)} 
				placeholder="Za kolik měsíců?"/>
			<StyledButton 
				color='#f45c42'
				onClick={() => props.onButtonClick(props.thing.id)}>✘
			</StyledButton>
		</span>
	)
}

export default Input