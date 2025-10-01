class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a place holder for Issue Filter</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        return (
            <div>This is a place holder for Issue Table</div>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a place holder for adding an Issue </div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment> 
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
                <hr />
            </React.Fragment>
        )
    }
}
const element = <IssueList />;

ReactDOM.render(element, document.getElementById('content'));
