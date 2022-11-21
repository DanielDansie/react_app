import './App.css';
import React from 'react';
import { 
  BrowserRouter,
//  Route,
  Link
} from "react-router-dom";

const Header = () => (
  <div>
    <Link href={"/"}>
      <a href='/'>Home</a>
    </Link>
    
  </div>
)

function App() {


  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
