
// import { useContext,useState } from 'react';
import './App.css';
// import Basic from './Basic';
import BasicTwo from './BasicTwo';



// import ThemeContext from './context/ThemeContext';


function App() {

// const [state,setState] = useState('pink')
//   const Context_two = useContext(ThemeContext);
//    const changeColor = ()=>{
//     setState(Context_two)
//    }
 
  return (
    <>
    
    {/* <div className={`App ${state}`}>
      <label>Name</label>
    <input type='text' placeholder='Type your Name'/>
    <button onClick={changeColor}>Click me</button>
    </div> */}
   

<BasicTwo/>
    </>
  );
}

export default App;
