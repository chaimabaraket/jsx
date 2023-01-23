import React from 'react';





function App() {

   /* const h1 = {
        
            
                fontFamily: 'Barlow Condensed', 
                fontWeight: 400,
                textTransform: 'uppercase',
                textAlign: 'center',
            }

            const contact ={
              borderBottom: '1px solid rgba(0, 0, 0, 0.171)',
            }
            
            const form ={
              display: 'flex',
              flexDirection: 'column',
              margin: '20px auto',
              width: '50%',
              textAlign: 'center',
            }
            

   const btt = {
                background: 'none',
                border: '1px solid black',
                padding: '0.5rem 1rem',
                fontFamily: 'Barlow', 
                fontWeight: 600,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '3px',
              }
            
*/
return (
    <>
    <section id="contact">
      <h2 className="text-important">contact me</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Email" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button>Send</button>
      </form>
    </section>
    </>
);
  }

export default App