import React from 'react';

const ResultsTable = (props) => {
    return (
        <table>
            <tbody>
            {
                    props.amounts.map((saveAmount, i) => {
                    return (<tr key={i}>
                        <td>{saveAmount}</td>    
                        <td>{i === 0 ? `1. - ${props.changes[0]}. měsíc` :`${props.changes[i - 1]}. - ${props.changes[i]}. měsíc` }</td>
                    </tr>)   
                })
            }
            </tbody>
        </table>
    )

}

export default ResultsTable