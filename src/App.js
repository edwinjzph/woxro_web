import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './components/home';


function App() {
  const  [build,setBuild] = useState([]);
   useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://api.xentice.com/api/postadSelect').then((t) =>
      t.json()
  ).catch((error) => {
      console.log("error")
  }
  
  )
  if(data){
    setBuild(data);
  }
    }
    fetchData()
  
  
  }, [])
console.log(build)
  return (
    <div className="App">
<Home build = {build}/>
    </div>
  );
}

export default App;
