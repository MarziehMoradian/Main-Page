import React  from 'react';
import Header from"./components/Header";
import Main from './components/Main';
import Footer from './components/Footer'


const App=({ buttonLabel,styleButton})=>{

  return(
    <div className='container'>
      <Header />
      <Main />
      <Footer />
    </div>
    
  );
};

export default App;
