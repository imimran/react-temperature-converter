import React from 'react'
import Boiling from './Boiling'
import ImputTemprature from './InputTemprature'
import { convert, toCelsius, toFahrenheit } from '../helper/converter';

class Calculator extends React.Component{
    state = { data: '', scale: 'c' };
    handleChange = (e, scale) => {
        console.log(e.target.value);
        this.setState({
            data: e.target.value,
            scale,
        });
    };


    render() {
        const { data, scale } = this.state
        const celsius = scale === "f" ? convert(data, toCelsius) : data
        const fahrenheit = scale === "c" ? convert(data, toFahrenheit) : data

    
        return (
            <div>
                <ImputTemprature
                    scale="c"
                    data={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <ImputTemprature
                    scale="f"
                    data={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <Boiling celsius={parseFloat(celsius)} />
            </div>
        )
      
        
    }
}

export default Calculator