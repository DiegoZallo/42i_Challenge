import './App.css'
import logo42i from './assets/42i.jpg'
import TwoNumberSum from './components/TwoNumberSum/twoNumberSum';
import NonConstructibleChange from './components/NonConstructibleChange/nonConstructibleChange';


const App = ()=> {

  return (
    <>
      <div>
        <a href="https://42i.co/" target="_blank">
          <img src={logo42i} className="logo" alt="42i logo" />
        </a>
      </div>
      <h1>Challenge</h1>
      <TwoNumberSum />
      <NonConstructibleChange />
    </>
  )
}

export default App
