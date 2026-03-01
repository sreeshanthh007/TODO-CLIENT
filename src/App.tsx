
import { Toaster } from 'sonner'
import { BrowserRouter as Router } from 'react-router'
import './App.css'
import { TodoRoutes } from './routes/todo.router'


function App() {
 

  return (
    <>
    

          <Toaster position='top-right' richColors theme='dark'/>
      <Router>
       <TodoRoutes/>
      </Router>
    </>
  )
}

export default App
