const React = React;

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
    }

    render() {
        return (
            <div>
                <img src="1.png" alt="" />
                <button>Next</button>
                <button>Previous</button>
            </div>
        );
    }
}

ReactDOM.render(<Box />, document.getElementById('root'));// eslint-disable-line
