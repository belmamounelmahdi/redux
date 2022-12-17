import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login, logout } from './store/action'

function App() {
  const count = useSelector( (state) => state.counter.count )
  const isLogged = useSelector( (state) => state.logged.logged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className="header">
        <h1>
          {count}
        </h1>
        {isLogged ? <button onClick={() => dispatch(logout())}> Logout </button> : <button onClick={() => dispatch(login())}> Login </button>}


      </div>
      <div className="btn">
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(increment(3))}>
        +3
      </button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
      </div>

    </div>
  )
}

export default App
