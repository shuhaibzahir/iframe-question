 import React from'react';
import './App.css';
import animalSampleData from "./constants/animals"
import AnimalImage from './animallist';
import server from "react-dom/server"
function App() {
  const [animalName, setAnimalName] = React.useState("dog")
  const Myapp = server.renderToString(<AnimalImage animal={animalName} />)
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">

      {
        animalSampleData.map((i)=>(
          <div key={i.id}>
            <button onClick={()=>{setAnimalName(i.name)}}>{i.name}</button>
            <div>Age: {i.age}</div>
            <div>Last feeding time: {i.lastFeedingTime}</div>
          </div>
        ))
      }
       
      <iframe  srcDoc={Myapp}  height={600} width={"100%"} title='animal image' />
    </div>
  );
}

export default App;
