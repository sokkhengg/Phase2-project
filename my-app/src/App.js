import './App.css';
import { useEffect, useState } from 'react';
import Test from "./Test.js";
import 'semantic-ui-css/semantic.min.css'

import Footer from './Footer';

import Header from "./Header"
import StartForm from './StartForm';
import Logo from './Logo';

console.log('add new branch to git')
function App() {
  const[questions, setQuestions] = useState([]);
  const LOCAL_API = "http://localhost:3000/questions"

  useEffect(() => {
    fetch(LOCAL_API)
    .then(r => r.json())
    .then(question => setQuestions(question))
  }, []
  )

  return (
   <div>
    <StartForm />
    <Logo />
    <Header {...questions}/>
     {questions.map(q => {
       return (
         <div>
           <Test question={q} />
         </div>
       )
     })}
     <Footer />
   </div>
  );
}

export default App;


