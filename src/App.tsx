import { useState } from "react";
import { Tweet } from "./components/tweet";

import './App.css';
import { AppRoutes } from "./routes";


function App() {

  return (
    <AppRoutes />

  //   <div>
  //     {tweets.map(tweet =>{
  //       return <Tweet text={tweet}/>
  //     })}

  //     <button 
  //     onClick={createTweet}
  //     style = {{
  //       backgroundColor: '#8257e6',
  //       border: 0,
  //       padding: '6px, 12px',
  //       color: '#fff'
  //     }}
  //     > 
  //     Adicionar Tweet
  //     </button>
  //  </div>
  );
  } 

  
export default App
