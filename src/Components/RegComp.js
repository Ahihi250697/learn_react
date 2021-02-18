import React, { Component } from "react";

export class RegComp extends Component {
    render() {
        console.log("object");
        return <div>this is regular comp {this.props.name}</div>;
    }
}

export default RegComp;
