import TreeView from './components'
import menus from './components/data'

function App() {
  return (
    <div>
    <TreeView menus={menus}/>
  </div>
  )
 
  
}

export default App;