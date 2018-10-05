import React, {Component} from "react";

const WelcomeText = () => (<h1>Sveicināti, Skolniek!</h1>);

export default class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allowedGrades: props.allowedGrades
        };

        this.setGrade = this.setGrade.bind(this);
    }

    setGrade(event) {
        this.setState({grade: event.target.value});
        alert(`You've selected grade ${event.target.value}!`);
    }

    render() {
        return (
            <div>
                <WelcomeText/>
                <select value={this.state.grade} onChange={this.setGrade}>
                    {this.state.allowedGrades.map((grade, i) => {
                        return (<option key={i} value={grade}>{grade}. klase</option>)
                    })}
                </select>
            </div>
        )
    }
}