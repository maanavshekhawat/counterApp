
import './App.css';
import Header from './components/Header';
import React,{useState} from 'react';

function App() {
  const [num,setNum] = useState(1);

  function inc(){
    setNum(num+1);
  }

  function dec(){
    setNum(num-1);
  }

  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <h1 className='heading' >{num}</h1>
        <div className='buttons'>
          <button className='btn' onClick={inc}>INCREMENT</button>
          <button className='btn' onClick={dec}>DECREMENT</button>
        </div>
      </div>
    </div>
  );
}

export default App;
