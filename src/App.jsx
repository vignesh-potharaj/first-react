class HelloWorld extends React.Component {
    render() {
        const continents = ['Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Australia', 'South America'];
        const helloContinents = Array.from(continents, c => `Hello, ${c}!`);
        const message = helloContinents.join(' ');

        return (
            <div title = 'Outer div'>
                <h1>{message}</h1>
            </div>
        );
    }
}

const element = <HelloWorld />;

ReactDOM.render(element, document.getElementById('content'));
