const React = React;

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    onLog() {
        console.log(this.props.num);
    }
    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <button onClick={() => this.onLog()}>Add</button>
            </div>
        );
    }
}

ReactDOM.render(<Box num={100} />, document.getElementById('root'));// eslint-disable-line
