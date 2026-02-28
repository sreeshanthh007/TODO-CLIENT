
import { Toaster } from 'sonner'
import { BrowserRouter as Router } from 'react-router'
import './App.css'


function App() {
 

  return (
    <>
    

      <Router>
          <Toaster position='top-right' richColors theme='dark'/>
       
      </Router>
    </>
  )
}

export default App
