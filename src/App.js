import React from 'react';
import './App.css';
import Header from './components/Header';
import User from './components/User';

const friends = [
  {
    id:1,
    name: "Ahmet",
  },
  {
    id:2,
    name: "Tayfun",
  },
  {
    id:3,
    name: "Gohkan",
  },
  {
    id:4,
    name: "Ayse",
  },
  {
    id:5,
    name: "Fatma"
  }
];
function App() {

  return (
    <>
      <User
        name="Baris"
        surname="Menderes"
        isLoggedIn={true}
        age={43}
        friends={friends}

      />
    </>
  )
}

export default App;