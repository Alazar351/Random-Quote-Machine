function App() {
  const [quotes, setQuotes] = React.useState([]);

  async function getQuotes() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuotes(data);
  }

  function changeColor() {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty("--color", randomColor);
  }

  function click() {
    getQuotes();
    changeColor();
  }

  React.useEffect(() => {
    click();
  }, []);
  return (
    <div className="container" id="quote-box">
      <h2 className="quote" id="text">
        {quotes.content}
      </h2>
      <p className="author" id="author">
        - {quotes.author}
      </p>

      <button className="button" id="new-quote" onClick={click}>
        New Quote
      </button>
      <a
        className="fa fa-twitter fa-2x"
        id="tweet-quote"
        href="https://twitter.com/intent/tweet"
        target="_blank"
      ></a>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
