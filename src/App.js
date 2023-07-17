import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


function App() {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const [quotes, setQuotes] = useState('');
  

  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  
  const change = () => {
    const randomColor = colors[Math.floor(Math.random()* colors.length)]
    setBackgroundColor(randomColor)
    console.log(backgroundColor);

    // Get a new Random Quote from the array
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    })
  }

  document.body.style.backgroundColor = backgroundColor;
  

  return (
    <div className="App">
      <div id="quote-box">
      <p id='text' style={{color: backgroundColor}}><FontAwesomeIcon icon={faQuoteLeft} /> {quotes.text}</p>
      <p id='author' style={{color: backgroundColor}}> - {quotes.author}</p>
      <div className='right'>
      <button className='btn btn-primary float-right' onClick={change} id='new-quote' style={{backgroundColor: backgroundColor}}>New quote</button>
      </div>
      <a id='tweet-quote' style={{color: backgroundColor}} href='twitter.com/intent/tweet' target='_blank'><FontAwesomeIcon icon={faTwitter}/></a>
      </div>
    </div>
  );
}

export default App;
