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
        <h3 className="red">{props.note.subject}</h3>
        <p style={{ color: 'green' }}>{props.note.content}</p>
        <button>XOA</button>
    </div>
);

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arrNote: arrNoteModel };
    }

    add() {
        const { txtSubject, txtContent } = this.refs;
        const note = new NoteModel(txtSubject.value, txtContent.value);
        this.setState({ arrNote: this.state.arrNote.concat(note) });
    }

    render() {
        const { arrNote } = this.state;
        return (
            <div>
                {arrNote.map(e => <Note key={e.content} note={e} parent={this} />)}
                <input type="text" ref="txtSubject" placeholder="Enter your subject" />
                <input type="text" ref="txtContent" placeholder="Enter your content" />
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        );
    }
}

ReactDOM.render(// eslint-disable-line
    <List />, document.getElementById('root')// eslint-disable-line
);
