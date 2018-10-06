import React from 'react'
import Input from './input'
import ResultsTable from './table';
import { StyledLayout, StyledText, StyledH1, StyledButton } from './styles';


class Form extends React.Component{
    LastId = 0;
    constructor() {
        super();
        this.state = {
            things: [],
            results: [],
            changes: []
        }
       
        this.addRow = this.addRow.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onMonthsChange = this.onMonthsChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.count = this.count.bind(this);
    }

    render(){
        return (
            <StyledLayout>
                <StyledH1>Spořící kalkulačka</StyledH1>
                <StyledButton onClick={ () => {this.addRow(this.state.things)}}>Přidat řádek</StyledButton>
               { this.state.things.length > 0? <form onSubmit={this.count}>
                    {
                         this.state.things.map(thing => {
                            return (
                                <div key={thing.id}>
                                    <Input 
                                        onButtonClick={this.removeRow} 
                                        thing={thing}
                                        onNameChange={this.onNameChange}
                                        onValueChange={this.onValueChange}
                                        onMonthsChange={this.onMonthsChange}
                                    />  
                                </div>
                            ) 
                    }) 
                    }
                
                <StyledButton type="submit">Spočítat</StyledButton>
            </form> : null
               }
            {
               this.state.results.length > 0 ? (
                <div>
                <StyledH1>Je potřeba šetřit: </StyledH1>
                   <ResultsTable
                    amounts={this.state.results}
                    changes={this.state.changes}
                />
                </div>) : null
            }
            </StyledLayout>
            )
        }

    removeRow = (id) => {
        this.setState( {
            things: this.state.things.filter((thing) => {
            return thing.id !== id
            }),
            results: [],
            changes: []   
        })
    }

    addRow(prevThings) {
        this.setState({
            things: [...prevThings, {
                id: this.LastId + 1 ,
                name: '',
                amount: 0,
                months: 0
            }]
        })
        this.LastId += 1
    }

    onNameChange(value, id) {
        this.setState({
            things: this.state.things.map((obj)=> {
                if(obj.id === id) {
                    obj.name = value.target.value
                    return obj;
                } else {
                    return obj;
                }
            })
        })

    }

    onValueChange(value, id) {
        this.setState({
            things: this.state.things.map((obj)=> {
                if(obj.id === id) {
                    obj.amount = Number(value.target.value)
                    return obj;
                } else {
                    return obj;
                }
            })
        })
    }

    onMonthsChange(value, id) {
        this.setState({
            things: this.state.things.map((obj)=> {
                if(obj.id === id) {        
                    obj.months = Number(value.target.value)
                    return obj;
                } else {
                    return obj;
                }
            })
        })
    }

    count (submit) {
        submit.preventDefault()
        const things = this.state.things
        const sortedThings = things.sort((a, b)=> {
            return a.months - b.months
        })
        const amounts = sortedThings.map((res) => {
            return res.amount
        })
        const totalAmount = amounts.reduce((a,b)=> a+b, 0)
        const totalMonths = sortedThings[sortedThings.length - 1].months 
        let oneSave = Math.round(totalAmount / totalMonths)
        let monthsOfChanges = [];
        // counting the save amounts
        const totalSaves =  sortedThings.map((thing, index) => {
            if (oneSave  < thing.amount / thing.months) {
                oneSave = Math.round((totalAmount - thing.amount) / (totalMonths - thing.months))
                monthsOfChanges.push(thing.months)
                return Math.round(thing.amount / thing.months)
            } else {

                return oneSave
            }
        })
        // wee need to add ending date into month of changes to display it
        monthsOfChanges.push(sortedThings[sortedThings.length - 1].months)

        this.setState({
            results: [...new Set(totalSaves)],
            changes: monthsOfChanges
        })

    }

}
export default Form