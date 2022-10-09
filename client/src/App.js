import React from 'react';
import './App.css';
import cloud1 from './imag/cloud.png';
import pic from './imag/icon_face.png';
import icon from './imag/icon_face.ico';
import cloud2 from './imag/cloud.png';
import landscape from './imag/landscape.svg';
import { Navbar } from "react-bootstrap";
import {useState, useEffect} from 'react';
import axios from "axios";



const InlineStyle={
  logo:{
      height: 50,
      padding:5,
  },
  home:{
      textDecoration: 'none' ,
      color: '#66BFBF' ,
      hover: 'blue',
      fontSize: 20,
      font: 'bold',
      padding: 1300,
      paddingLeft: 10,
  },
  a:{
    textDecoration: 'none' ,
    color: 'white' ,
    hover: 'blue',
  },
  pbutton:{
    backgroundColor: 'black',
    color: 'white',
    fontSize: 8,
    bordeRadius: 5,
    cursor: 'pointer',
  },
  qbutton:{
    fontSize: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    color: 'white',
    border: 'solid',
    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
  }
};

function App() {
   
   
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);
  const[title, setTitle] = useState('Navya Sree');
  const[description, setDescription] = useState('I started coding when I was 18 year old, as I always wanted to become a Developer. Over the time, I gained  wealth of experience in designing and developing web applications and teaching what I learned to students.');
  
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setIsDisabled(!isDisabled)
  };
  const [quote,setQuote] =useState('Quick decisions are unsafe decisions.');
  const [author,setAuthor] = useState('Sophocles');
  const [tags,setTags] = useState('wisdom');
  const getQuote = () => {
      axios.get('https://api.quotable.io/random')
        .then(res => {
            console.log(res.data.content)
            setQuote(res.data.content)

            console.log(res.data.author)
            setAuthor(res.data.author)

            console.log(res.data.tags)
            setTags(res.data.tags)

        })
        .catch(err =>{
            console.log(err)
        })
  }

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result').value="";
  })
  const Add=(e)=>{
      e.preventDefault();
      if(clear) setClear(false);
      let currentNum=document.querySelector('#num').value
      if(currentNum === ' ')
      return;
      let sum= currentSum+parseInt(currentNum);
      setCurrentSum(sum);
      document.querySelector('#num').value="";
        
    }
  
   
return (
  <div className="App">
     <Navbar bg="light">
      <Navbar.Brand>
      <img  src={icon} style={InlineStyle.logo} alt="Profile" />   
       <a href="http://localhost:3000/" style={InlineStyle.home}>Home</a>
      </Navbar.Brand>
      </Navbar>
  <div className="top-container">
      <img className="top-cloud" src={cloud1} alt="cloud"/>
         <div className="profile">
          <h1>My Profile...</h1>
          <div className="bio-row">
              <img className="pic" src={pic} alt="Profile Pic"/>
                <h2>{title}</h2>
                <button  type="button" onClick={handleClick} style={InlineStyle.pbutton}>Edit My Name</button>
                <input type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      disabled={isDisabled}
                      />
              <p>{description}</p>
              <button onClick={handleClick} style={InlineStyle.pbutton}>Edit My Description</button>
              <input type="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      disabled={isDisabled}
                      />

          </div>
         </div>
      
      <img className="bottom-cloud" src={cloud2} alt="cloud"/>
      <img className="landscape" src={landscape} alt="landscape"/>

      <div className="addition">
      <h1>Addition of numbers</h1>
    
    <form>
          <input type="text" id="result" placeholder='Sum' value={currentSum}  readOnly />
          <input type="text" id="num" placeholder="enter a number" /><br/><br/>
          <button onClick={Add} style={InlineStyle.qbutton}>Add</button>
    </form>
  </div>
      <div className="quote">
        <h1>Quote of the day</h1>
        <p>click to know</p>
        <button onClick={getQuote} style={InlineStyle.qbutton} >What's for today</button>
        <blockquote>
        <p>" {quote} "</p>
        <cite><p>~ {author}</p></cite>
        <p>Tags: {tags}</p>
        </blockquote>
        <br/>
  <div className="bottom-container">
      <a className="footer-link1" href="https://www.linkedin.com/" style={InlineStyle.a}>LinkedIn  </a>
      <a className="footer-link2" href="https://github.com/NavyaSreeG99" style={InlineStyle.a}>GitHub</a>
      <p id="copyright" style={{color:'whitesmoke'}}>© ngavini@albany.edu</p>
  </div>
</div>
</div>
</div>
);
}
export default App;

