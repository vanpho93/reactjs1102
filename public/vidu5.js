const React = React;

class BoxControl extends React.Component {
    onAdd() {

    }
    render() {
        return (
            <button onClick={this.onAdd.bind(this)}>Add</button>
        );
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <BoxControl />
            </div>
        );
    }
}

ReactDOM.render(<Box />, document.getElementById('root'));// eslint-disable-line
