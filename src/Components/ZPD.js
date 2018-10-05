import WelcomeScreen from "./WelcomeScreen";
import React, {Component} from "react";

export class ZPD extends Component {
    render() {
        return (
            <WelcomeScreen allowedGrades={[8,9,10,11,12]} />
        )
    }
}