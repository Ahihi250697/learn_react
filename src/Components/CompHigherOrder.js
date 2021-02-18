import React, { Component } from "react";

const ComponentHigherOrder = (OriginComponent) => {
    class ClassHigherOrder extends Component {
        render() {
            return (
                <OriginComponent name="this is name origin"></OriginComponent>
            );
        }
    }

    return ClassHigherOrder;
};

export default ComponentHigherOrder;
