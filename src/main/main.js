import React, { Component } from "react";
import Landing from "../landing/landing";
import eot from '../equations/eot'
import moontime from '../equations/moontime'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:''
        };
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({date:e.target.value})
    };

	handleSubmit(e) {
        e.preventDefault();
		console.log(eot(this.state.date))
		console.log(moontime(this.state.date))

	}

    render() {
        return (
            <>
                <Landing />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="day"> Date: </label>
                    <input
                        type="date"
                        id="day"
                        name="day"
                        onChange={e => this.handleChange(e)}
                    />
                    <button type="submit">Get Info</button>
                </form>
            </>
        );
    }
}
