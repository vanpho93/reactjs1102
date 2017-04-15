const React = React;

//stateless component ::: functional component
const Note = (props) => (
    <div>
        <h3>{props.subject}</h3>
        <p>{props.content}</p>
    </div>
);

//class component
class List extends React.Component {
    render() {
        return (
            <div>
                <Note subject="Cong viec" content="Sang mai day som di lam" />
                <Note subject="Vui choi" content="Toi mai co hen!!!" />
            </div>
        );
    }
}

ReactDOM.render(// eslint-disable-line
    <List />, document.getElementById('root')// eslint-disable-line
);
