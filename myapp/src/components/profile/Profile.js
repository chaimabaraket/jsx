import React from 'react';
import './Profile.css'


function App() {

    return (
        <div>
            <section id="about-me">
      <h1>
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img className='avatar' src="./images/John1.jpg" alt="jhon-doe" />
    </section>
        </div>
    );
      }
    
    export default App