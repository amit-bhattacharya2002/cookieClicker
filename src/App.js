import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from 'react'


function App() {

  let [ cookies, setCookies] = useState(0)

  useEffect(()=>{
    document.title = `${cookies} cookies`
  })
  return (
    <div className="App">
      <h1>
        Cookie Clicker
      </h1>
      <h3>You have {cookies} cookies</h3>
      <button onClick={()=> (setCookies(cookies = cookies+1))}>Click to add more cookies</button>
    </div>
  );
}

export default App;
