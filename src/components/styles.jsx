import Styled from 'styled-components'

const StyledInput = Styled.input`
    font-size: 1.25em;
    margin-right: 0.2em;
    border-top: none;
    border-left: none;
    border-right: none;
    &:focus{
        outline: 0;
    }
`
const StyledText = Styled.div`
    font-size: 1em;
    padding: 0.5em;
`

const StyledH1 = Styled.div`
    font-size: 2em;
    padding: 1.25em;
`

const StyledLayout = Styled.div`
    width: 80%;
    margin-left: 10%;
    text-align: center;
`

const StyledButton = Styled.button`
    border: solid 1px #5d5e60;
    font-size: 1.25em;
    ${props => props.color? `background-color: ${props.color}` : 'background: none'}
    padding: 0.5em;
    margin: 0.5em;
        &:hover{
            cursor: pointer;
        }
       
`
const StyledTable = Styled.table`
        margin: auto;
        font-size: 1.5em;
        padding: 1em;
        width: 35%;
`
const StyledCell = Styled.td`
    border-top: none;
    border-left: none;
    border-right: none;
    margin: 1em;
    ${props => props.color? `background-color: ${props.color}` : 'background: none'}
    text-align: left 
    margin-right: 3em;
`

export { StyledLayout,
	StyledInput,
	StyledH1,
	StyledText,
	StyledButton,
	StyledTable,
	StyledCell }