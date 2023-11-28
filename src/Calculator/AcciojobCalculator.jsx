import React, { useState } from "react";

function ReactCalculator() {
  const [show, setShow]=useState(false);
  const [error,setError]=useState(false);
  const [errorMsg,setErrorMsg]=useState('');
  const [result,setResult]=useState('');
  const [num1,setNum1]=useState('');
  const [num2,setNum2]=useState('');

  const handleClick=(e)=>{
    if(!num1 || num1===''){
        setError(true);
        setErrorMsg("Please Enter Num1");
    } else if(!num2 || num2===''){
        setError(true);
        setErrorMsg("Please Enter Num2");
    } else if( isNaN(num1)){
        setError(true);
        setErrorMsg("Num1 should be a number");
    } else if( isNaN(num2)){
        setError(true);
        setErrorMsg("Num2 should be a number");
    }
    else if (e.target.className.contains('divide') && parseFloat(num2)===0){
        setError(true);
        setErrorMsg("can't divide by zero");
    }
    else{
        if(e.target.className.contains('plus')){
            setResult(parseFloat(num1) + parseFloat(num2));
        }
        else if(e.target.className.contains('minus')){
            setResult(parseFloat(num1) - parseFloat(num2));
        }
        else if(e.target.className.contains('multiply')){
            setResult(parseFloat(num1) * parseFloat(num2));
        }
        else{
            setResult(parseFloat(num1) / parseFloat(num2));
        }
    }
} 
  return (
    <>
    <div className="calculator">
        <h1>React Calculator</h1>
        <input 
            type="text"
            id="num1" 
            name="num1" 
            placeholder="Num 1" 
            value={num1} 
            onChange={e=>setNum1(e.target.value)}/>
        <input 
            type="text" 
            id="num2" 
            name="num2" 
            placeholder="Num 2"
            value={num2} 
            onChange={e=>setNum2(e.target.value)}
            />
        <div>
            <button className="btn plus" onClick={handleClick}>+</button>
            <button className="btn minus" onClick={handleClick}>-</button>
            <button className="btn multiply" onClick={handleClick}>*</button>
            <button className="btn divide" onClick={handleClick}>/</button>
        </div>
        { show && (    
        <div>
            {error ?(<div className="error">{errorMsg}</div>
            ):(
            <div className="result">The Result Is {result}</div>
            )}
        </div>
        )}
        
    </div>
    </>
  );
}

export default ReactCalculator;
