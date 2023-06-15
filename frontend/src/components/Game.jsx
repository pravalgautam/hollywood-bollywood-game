import React, { useState, useEffect, useRef } from 'react';
import { Client, Databases } from 'appwrite';
import './game.css';

function Game() {
  const [movie, setMovie] = useState('Click On Start');
  const [inputValue, setInputValue] = useState('');
  const inputValueRef = useRef('');

  const [time, setTime] = useState(30);
  
  const [index, setIndex] = useState(0);
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('648a1c84467d2af0152a');
    const databases = new Databases(client);

    databases
      .listDocuments('648a1d0b99c02b8e8534', '648a1d76ca950097482a')
      .then((response) => {
        const movieNames = response.documents[0].movieName;
        setDocuments(movieNames);
      })
      .catch((error) => {
        console.error('Error fetching data from Appwrite:', error);
      });
  }, [index]);

  useEffect(() => {
    if (documents && documents.length > 0) {
      const updatedMovies = [...documents];
      updatedMovies[index] = movie;
      setDocuments(updatedMovies);
    }
  }, [movie]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
changeMovie()
    }

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  let changeMovie = () => {
    if (documents && documents.length > 0) {
      const newIndex = (index + 2) % documents.length;
      setIndex(newIndex);
      setMovie(documents[newIndex]);
    }
    setTime(30)
  };

  const fill = () => {
    if (documents && documents.length > 0) {
      const nestedArray = documents.map((movie) => Array.from(movie));
      console.log('Nested Array:', nestedArray);

      for (let i = 0; i < nestedArray[index].length; i += 2) {
        if (nestedArray[index][i] === '_' && nestedArray[index + 1][i] === inputValue) {
          nestedArray[index][i] = inputValue;
        }
      }

      setInputValue('');
      setMovie(nestedArray[index].join(''));
    }
  };

  const start = () => {
    if (documents && documents.length > 0) {
      setMovie(documents[0]);
    }
  };

  let handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2 className="Title">Guess The Movie</h2>
      <div className="moviegamecontainer">
        <h1 className="moviename">{movie}</h1>
        <div className="inputcon">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            maxLength={1}
            placeholder="Enter a letter"
            className="inputsec"
          />
        </div>
        <div className="btncon">
          <button className="btn" onClick={start}>
            Start
          </button>
          <button className="btn" onClick={fill}>
            Fill
          </button>
          <button className="btn" onClick={changeMovie}>
            Change Movie
          </button>
        </div>
   
        <h2  style={{ color: 'white'}} className="timer">
   
          {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
        </h2>
       
      </div>
    </div>
  );
}

export default Game;
