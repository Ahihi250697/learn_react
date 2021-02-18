import React, { PureComponent } from "react";

class PureComp extends PureComponent {
    render() {
        return <div>this is pure comp {this.props.name}</div>;
    }
}

export default PureComp;
