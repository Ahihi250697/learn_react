import React, { Component } from "react";
import ClassHigherOrder from "./CompHigherOrder";

export class Cpn_click extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            decount: 10,
        };
    }

    update_count = () => {
        this.setState({
            count: this.state.count + 1,
            decount: this.state.decount - 1,
        });
    };

    render() {
        const { count, decount } = this.state;
        return (
            <button onClick={this.update_count}>
                {count}
                {this.props.name}
                {decount} times
            </button>
        );
    }
}

export default ClassHigherOrder(Cpn_click);
