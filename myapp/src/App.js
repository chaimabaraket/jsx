import React from 'react'

import './App.css'
import Navbar  from './components/Navbar'
import Profile  from './components/profile/Profile'
import Project  from './components/projects/Project'
import Contact  from './components/Contact'

function App() {
  return (
   <><Navbar /><Profile /><Project /> <Contact /></>
  )
}

export default App
