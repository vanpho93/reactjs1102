const React = React;

//stateless component ::: functional component
const Note = (props) => (
    <div>
        <h3 className="red">{props.subject}</h3>
        <input type="text" defaultValue="Xin chao" />
        <p style={{ color: 'green' }}>{props.content}</p>
        <button onClick={() => console.log(props.subject)}>LOG</button>
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
