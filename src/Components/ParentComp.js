import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
    __style = {
        color: "red",
        fontSize: "100px",
    };

    constructor(props) {
        super(props);

        this.state = {
            name: "parent name",
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "name is changed" });
        }, 3000);
    }
    render() {
        return (
            <div>
                <h3 style={this.__style} name={this.state.name}>
                    this is parent
                </h3>
                {this.props.children}
                <RegComp name={this.state.name}></RegComp>
                <PureComp></PureComp>
            </div>
        );
    }
}

export default ParentComp;
