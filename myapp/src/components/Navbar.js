import React from 'react';


function App() {

    const h1 = {
        
            
                fontFamily: 'Barlow Condensed', 
                fontWeight: 400,
                textTransform: 'uppercase',
            }

   const button = {
                background: 'none',
                border: '1px solid black',
                padding: '0.5rem 1rem',
                fontFamily: 'Barlow', 
                fontWeight: 600,
                fontSize:' 13px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
              }
              
    const a ={
                textDecoration: 'none',
                color: 'black',
              }

    const header= {
    
      display: 'flex',
      position: 'sticky',
      top: 0,
      background: 'white',
      justifyContent: 'space-between',
      padding:' 0 20px',
      alignItems: 'center',
      borderBottom:'1px solid rgba(0, 0, 0, 0.5)',
    }          
              
              
return (
    <>
    <div style={header}>
        <h1 style={h1}>John Doe</h1>
        <ul className="navmenu">
            <li><a style={a} href="#">About</a></li>
            <li><a style={a} href="#">Projects</a></li>
            <li><a style={a}  href="#">Contact</a></li>
        </ul>
        </div>
    </>
);
  }

export default App