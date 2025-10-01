class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a place holder for Issue Filter</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
            const rowStyle = { border: "1px solid silver", padding: 6 };
        return (
            <table style={{ borderCollapse: "collapse" }} >
                <thead>
                    <tr>
                        <th style={rowStyle}>ID</th>
                        <th style={rowStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow rowStyle={rowStyle} issueId={1} issueTitle={"Error in console when clicking Add"} />
                    <IssueRow rowStyle={rowStyle} issueId={2} issueTitle={"Missing border bottom on panel"} />
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return(
            <tr>
                <td style={style}>{this.props.issueId}</td>
                <td style={style}>{this.props.issueTitle}</td> 
            </tr>
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
