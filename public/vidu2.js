const React = React;

class Box extends React.Component {
    render() {
        return (
            <div>
                <h3>0</h3>
                <button onClick={() => console.log(this.props.num)}>Add</button>
            </div>
        );
    }
}

ReactDOM.render(<Box num={100} />, document.getElementById('root'));// eslint-disable-line
