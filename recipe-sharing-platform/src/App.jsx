
import './App.css'
import HomePage from './components/HomePage'

function App() {
 

  return (
    <>
     <div className="text-blue-500 text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to Recipe Sharing Platform</h1>
        <p className="text-lg">Tailwind CSS is successfully integrated!</p>
         <div className="App">
      <HomePage />
    </div>
    </div>
    </>
  )
}

export default App