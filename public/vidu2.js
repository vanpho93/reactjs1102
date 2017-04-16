const React = React;

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0, isRed: false };
    }
    onLog() {
        this.setState({ value: this.state.value + 1 });
    }

    onChangeColor() {
        this.setState({ isRed: !this.state.isRed });
    }

    render() {
        return (
            <div>
                <h3 style={{ color: this.state.isRed ? 'red' : 'black' }}>{this.state.value}</h3>
                <button onClick={() => this.onLog()}>Add</button>
                <button onClick={() => this.onChangeColor()}>Toggle</button>
            </div>
        );
    }
}

ReactDOM.render(<Box num={100} />, document.getElementById('root'));// eslint-disable-line
