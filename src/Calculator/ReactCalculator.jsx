import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './calculator.css';



function ReactCalculator() {
    const [result, setresult]=useState("");
    const [prestate, setPrestate]=useState(result);
    function handleClick(e){
        setresult(result.concat(e.target.name)) 
    }

    const clear = ()=>{
          setresult("");
    }

    const BackSpace = () =>{
      setresult(result.slice(0,result.length-1));
    }

    const Calculate = () =>{
      try {
        setresult(eval(result).toString());        
      } catch (error) {
        setresult('Error');
      }
    }
     const percentage = () =>{
            setresult(result/100);
     }

    return (
      <>
        <div className="container">
            <form>
                <input type="text" value={result}/>
            </form>
            <div className="keypad">
                <button onClick={clear} id="clear">Clear</button>
                <button onClick={BackSpace} className="highlight">C</button>
                <button name="/" onClick={handleClick} className="highlight">&divide;</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="*" onClick={handleClick} className="highlight">&times;</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="-" onClick={handleClick} className="highlight">-</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="+" onClick={handleClick} className="highlight">+</button>
                <button name='0' onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button name="%" onClick={percentage} className="highlight">%</button>
                <button onClick={Calculate} className="highlight">=</button>

            </div>
        </div>
      </>
    );
  }
  
  export default ReactCalculator;
  