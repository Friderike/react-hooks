import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWith, setWindowWith] = useState(window.innerWidth)

  useEffect(() => {
    console.log('resource changed');

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

      return () => {
        console.log('return from resource change') // CLEAN UP FUNCTION! WHENEVER THIS HOOK RUNS, THE RETURN RUNS FIRST TO CLEAN UP POSSIBLE EVENT LISTENERS OR STUFF LIKE THAT !
      }
  }, [resourceType]); // EVERYTIME THE DEPENCY ARRAY CHANGES (ITS VALUES), THE HOOK IS GOING TO RUN

  useEffect(() => {
    console.log("on mount");
  }, []); // RUNS ONLY ONCE!!! NO MATTER WHAT WE CHANGE ON OUR PAGE!! BECAUSE OF THE EMPTY []

  // FOR THE WINDOW WIDTH:
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleResize() {
    setWindowWith(window.innerWidth)
  }

  return (
    <>
      <div>
        <button
          style={{ marginRight: "0.5rem" }}
          onClick={() => setResourceType("posts")}
        >
          Posts
        </button>
        <button
          style={{ marginRight: "0.5rem" }}
          onClick={() => setResourceType("users")}
        >
          Users
        </button>
        <button onClick={() => setResourceType("comments")}>Comments</button>

        <h1>{resourceType}</h1>

<section style={{maxHeight: '20svh', overflowY: 'auto'}}>
        {items.map((item, index) => {
          return (
              <p key={index} style={{ maxWidth: "70%", margin: "0 auto 1rem"}}>{JSON.stringify(item)}</p>           
          );
        })}
        </section>
      </div>

      <section style={{marginTop: '1.5rem'}}>
        <h2>Window width value</h2>
        <h3>{windowWith}</h3>
      </section>
    </>
  );
}

export default App;
