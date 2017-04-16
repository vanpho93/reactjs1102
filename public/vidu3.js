const React = React;

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
    }

    render() {
        const { value } = this.state;
        function getHtml(isOdd) {
            if (isOdd) return <h2>Training</h2>;
            return <h1>KHOA PHAM</h1>;
        }
        return (
            <div>
                {getHtml(value % 2 === 1)}
                <img src={`${value}.png`} alt="" />
                <button onClick={() => this.setState({ value: value + 1 })}>Next</button>
                <button onClick={() => this.setState({ value: value - 1 })}>Previous</button>
            </div>
        );
    }
}

ReactDOM.render(<Box />, document.getElementById('root'));// eslint-disable-line
