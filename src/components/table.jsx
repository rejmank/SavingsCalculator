import React from 'react'
import PropTypes from 'prop-types'
import { StyledTable, StyledCell} from './styles'

const ResultsTable = (props) => {
	return (
		<StyledTable>
			<tbody>
				{
					props.amounts.map((saveAmount, i) => {
						return (<tr key={i}>
                         
							<StyledCell>{i === 0 ? `1. - ${props.changes[0]}. měsíc` :`${props.changes[i - 1]}. - ${props.changes[i]}. měsíc` }</StyledCell>
							<StyledCell>{saveAmount} Kč</StyledCell>  
						</tr>)   
					})
				}
			</tbody>
		</StyledTable>
	)
}

ResultsTable.propTypes = {
	amounts : PropTypes.arrayOf(PropTypes.number).isRequired,
	changes : PropTypes.arrayOf(PropTypes.number).isRequired
}

export default ResultsTable