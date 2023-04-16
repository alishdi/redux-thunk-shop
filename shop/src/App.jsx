
import './App.css'
import routes from './component/router'
import { useRoutes } from 'react-router-dom'
function App() {
 

  const rout = useRoutes(routes)

  return (
    <>
      {rout}
    </>
  )
}

export default App
