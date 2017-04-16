const React = React;

class NoteModel {
    constructor(subject, content) {
        this.content = content;
        this.subject = subject;
    }
}

const arrNoteModel = [
    new NoteModel('Hoc tap', 'Xem truoc video ve reactjs'),
    new NoteModel('Vui choi', 'Hen nhom ban dai hoc'),
    new NoteModel('Cong viec', 'Nop bao cao cuoi thang')
];

const Note = (props) => (
    <div>
        <h3 className="red">{props.subject}</h3>
        <p style={{ color: 'green' }}>{props.content}</p>
    </div>
);

class List extends React.Component {
    render() {
        return (
            <div>
                {arrNoteModel.map(e => <Note key={e.content} note={e} />)}
            </div>
        );
    }
}

ReactDOM.render(// eslint-disable-line
    <List />, document.getElementById('root')// eslint-disable-line
);
