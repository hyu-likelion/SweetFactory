import React from "react";
import './Calculator.css';

class Calculator extends React.Component {
    state = {
        inputLine: "",
        stack: []
    }
    put = (val) => {
        this.setState(current => ({
            inputLine: current.inputLine + val,
        }))
    };
    resetValue = () => {
        this.setState(current => ({ inputLine: "" }))
    };
    result = () => {
        try {
            /* eslint-disable no-eval */
            const check_list = [...this.state.inputLine];
            this.isError(check_list);
            const output = eval(this.state.inputLine);
            this.setState(current => ({ inputLine: "", stack: [...current.stack, `${current.inputLine} = ${output}`] }))
        }
        catch (value) {
            this.setState({ inputLine: "ERROR" });
        }
    };
    isError = (check_list) => {
        let num, ch = 0;
        check_list.map(char => {
            if (isNaN(char)) ch = ch + 1;
            else num = num + 1;
        })
        if (num !== ch + 1) throw new Error
    }
    render() {
        const { inputLine, stack } = this.state;
        return (
            <div className="inner">
                <div className="leftBox">
                    <input className="linearBox" value={inputLine}></input>
                    <div className="linearBox">
                        <button className="button-3x" onClick={() => this.resetValue()}>AC</button>
                        <button className="button-orange" onClick={() => this.put("/")}>&divide;</button>
                    </div>
                    <div className="linearBox">
                        <button onClick={() => this.put("7")}>7</button>
                        <button onClick={() => this.put("8")}>8</button>
                        <button onClick={() => this.put("9")}>9</button>
                        <button className="button-orange" onClick={() => this.put("*")}>&times;</button>
                    </div>
                    <div className="linearBox">
                        <button onClick={() => this.put("4")}>4</button>
                        <button onClick={() => this.put("5")}>5</button>
                        <button onClick={() => this.put("6")}>6</button>
                        <button className="button-orange" onClick={() => this.put("-")}>-</button>
                    </div>
                    <div className="linearBox">
                        <button onClick={() => this.put("1")}>1</button>
                        <button onClick={() => this.put("2")}>2</button>
                        <button onClick={() => this.put("3")}>3</button>
                        <button className="button-orange" onClick={() => this.put("+")}>+</button>
                    </div>
                    <div className="linearBox">
                        <button className="button-2x" onClick={() => this.put("0")}>0</button>
                        <button onClick={() => this.put(".")}>.</button>
                        <button className="button-orange" onClick={() => this.result()}>=</button>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="resultBox">결과</div>
                    {stack.map(i => <div>{i}</div>)}
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Calculator;
