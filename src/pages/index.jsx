import React from 'react'
import Home from './home';
function Index() {
    const loadFunction = () => {
      alert("loading")
    }

  return (
    <div className='scroll-smooth' onWaiting={loadFunction}>
      <Home/>
    </div>
  );
}
export default Index;