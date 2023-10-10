import React from "react";
import Header from "./Header";

function HomePage() {
  const [data, setData] = React.useState([]);

  const handleClick = () => {
    fetch("http://localhost:5000/fetchItems")
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
      });
  };

  return (
    <div className="App">
      <Header />
      <h1>Home Page</h1>
      <button onClick={handleClick} className="show_data_button">
        Show Data
      </button>
      <div className="show_items">
        {data.length ? (
          <ul>
            {data.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
