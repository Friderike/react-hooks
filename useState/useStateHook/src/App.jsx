import { useState } from "react";
// NOTE: REACT HOOKS MUST BE CALLED IN THE EXACT SAME ORDER IN EVERY COMPONENT RENDER! (cannot be put in if statements, loops, functions. THE HOOK DECLARATION, YOU CAN OF COURSE PUT A setState() INTO A FUNCTION.  THE DEFINING CONST MUST BE ON TOP OF THE COMPONENT FUNCTION)
import "./App.css";

function App() {
  // const [count, setCount] = useState(0); // RUNS EVERYTIME THE COMPONENT IS RENDERED = CAN SLOW THE APP DOWN IF A COMPLEX STATE IS PASSED IN ALSO A FUNCTION THAT IS CALLED
  const [count, setCount] = useState(() => {
    console.log('run function')
    return 0; // sets the default value
  })

  // useState with OBJECTS:
  const [state, setState] = useState({count2: 4, themeColor: 'blue'});
  const count2 = state.count;
  const themeInObj = state.themeColor
  const [theme, setTheme] = useState('blue');

  function add() {
    setCount((prevCount) => prevCount + 1);
    setTheme('blue')
  }
  function decrementCount() {
    if (count > 0) {
      // setCount(count - 1) NOT CORRECT TO UPADTE THE STATE BASED ON THE PREVIOUS STATE!!! USE CALLBACK FUNCTION INSTEAD!:
      setCount((prevCount) => prevCount - 1);
    } else {
      return;
    }
    setTheme('red');
  }

  function changeThemeInObj() {
    setState(prevState => {
      return {...prevState.themeColor = 'red'}; // WHEN USING AN OBJECT WITH USESTATE, ALWAYS NEED TO SPREAD THE ORIGINAL OBJECT, OTHERWISE IT'S JUST GETTING OVERWRITTEN (DISAPPEARS) RATHER USE A USESTATE HOOK FOR EVERY PROPERTY !
    })
  }

  return (
    <>
      <button onClick={decrementCount} style={{ marginRight: "0.5rem" }}>
        -
      </button>
      <span style={{ color: "#020202" }}>{count}{theme}</span>
      <button onClick={add} style={{ marginLeft: "0.5rem" }}>
        +
      </button>
    </>
  );
}

export default App;
