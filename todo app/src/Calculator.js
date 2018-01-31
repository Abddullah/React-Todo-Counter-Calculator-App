import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            initialValue: "",
            laterValue: "",
            operations: undefined,
        }

    }

    calculateNumbers(value) {
        if (this.state.operations === undefined) {
            let initialClone = this.state.initialValue;
            initialClone = initialClone + value.toString();
            this.setState({
                initialValue: initialClone
            })
        }



        else {
            let laterValueClone = this.state.laterValue;
            laterValueClone = laterValueClone + value.toString()
            this.setState({
                laterValue: laterValueClone
            })
        }


    }


    applyOperation(value) {
        this.setState({
            operations: value
        })
    }

    equalOperation() {

        if (this.state.operations === "+") {
            this.setState({
                initialValue: Number(this.state.initialValue) + Number(this.state.laterValue),
                operations: undefined,
                laterValue: ""
            })

        }
        else if (this.state.operations === "-") {
            this.setState({
                initialValue: Number(this.state.initialValue) - Number(this.state.laterValue),
                operations: undefined,
                laterValue: ""
            })

        }

        else if (this.state.operations === "/") {
            this.setState({
                initialValue: Number(this.state.initialValue) / Number(this.state.laterValue),
                operations: undefined,
                laterValue: ""
            })

        }

        else if (this.state.operations === "*") {
            this.setState({
                initialValue: Number(this.state.initialValue) * Number(this.state.laterValue),
                operations: undefined,
                laterValue: ""
            })

        }



    }

    resetData() {
        this.setState({
            initialValue: "",
            laterValue: "",
            operations: undefined,

        })

    }







    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <h1>Calculator</h1><br />
                <div className="calcUI">
                    {(this.state.laterValue === "") ?
                        (<input className="form-control customInputsize" type="text" value={this.state.initialValue} />) :
                        (<input className="form-control  customInputsize" type="text" value={this.state.laterValue} />)}

                    <br />
                    <button className="buttonCalc" value="7" onClick={this.calculateNumbers.bind(this, 7)}>7</button>
                    <button className="buttonCalc" value="8" onClick={this.calculateNumbers.bind(this, 8)}>8</button>
                    <button className="buttonCalc" value="9" onClick={this.calculateNumbers.bind(this, 9)}>9</button>
                    <button className="buttonCalcBlk" value="/" onClick={this.applyOperation.bind(this, "/")}>/</button>
                    <br />
                    <button className="buttonCalc" value="4" onClick={this.calculateNumbers.bind(this, 4)}>4</button>
                    <button className="buttonCalc" value="5" onClick={this.calculateNumbers.bind(this, 5)}>5</button>
                    <button className="buttonCalc" value="6" onClick={this.calculateNumbers.bind(this, 6)}>6</button>
                    <button className="buttonCalcBlk" value="*" onClick={this.applyOperation.bind(this, "*")}>*</button>
                    <br />
                    <button className="buttonCalc" value="1" onClick={this.calculateNumbers.bind(this, 1)}>1</button>
                    <button className="buttonCalc" value="2" onClick={this.calculateNumbers.bind(this, 2)}>2</button>
                    <button className="buttonCalc" value="3" onClick={this.calculateNumbers.bind(this, 3)}>3</button>
                    <button className="buttonCalcBlk" value="+" onClick={this.applyOperation.bind(this, "+")}>+</button><br />
                    <button className="buttonCalcRed" value="c" onClick={this.resetData.bind(this, "c")}>C</button>
                    <button className="buttonCalc" value="0" onClick={this.calculateNumbers.bind(this, 0)}>0</button>
                    <button className="buttonCalcBlk" value="=" onClick={this.equalOperation.bind(this, "=")}>=</button>
                    <button className="buttonCalcBlk" value="-" onClick={this.applyOperation.bind(this, "-")}>-</button><br />

                </div>


                <br /><br /><br /><br /><hr /><hr />

            </div>
        )
    }
}






export default Calculator;
