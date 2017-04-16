const React = React;

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <img src={`${value}.png`} alt="" />
                <button onClick={() => this.setState({ value: value + 1 })}>Next</button>
                <button onClick={() => this.setState({ value: value - 1 })}>Previous</button>
            </div>
        );
    }
}

ReactDOM.render(<Box />, document.getElementById('root'));// eslint-disable-line
