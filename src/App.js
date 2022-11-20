import React from 'react';
import './App.css';
import Header from './components/Header';

const name = "Baris";
const surname = "Menderes";
const isLoggedIn = false;

function App() {
  // return React.createElement("div", null, "Hello");
  // return (
  //   <div>
  //     <Header />
  //     <p className="xyz">
  //       Lorem Ipsum is simply dummy text of the printing
  //       and typesetting industry. Lorem Ipsum has been
  //       the industry's standard dummy text ever since the 1500s,
  //       when an unknown printer took a galley of type and scrambled
  //       it to make a type specimen book. It has survived not only five
  //       centuries, but also the leap into electronic typesetting,
  //       remaining essentially unchanged. It was popularised in the
  //     </p>
  //     <label htmlFor="myinput">
  //       Name
  //       <input id="myinput"></input>
  //     </label>
  //   </div>
  // );
  return (
    <>
      {/* <h1>{name} {surname}</h1> */}
      <h1>
        {isLoggedIn && `Benim adim ${name} ,soyadim ${surname}`}
        {!isLoggedIn && `Giris yapilmadi`}
      </h1>
      {/* Short If kullanimi */}
      {isLoggedIn ? `Benim adim : ${name}, soyadim :  ${surname}` : `Giris Yapilmadi`}
    </>
  )
}

export default App;