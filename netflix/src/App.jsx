
import './App.css'

import { Netflix } from './components/netflix'
function App() {


  return (
    <div>
      <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand  h1 text-danger">Netflix</span>
          <div className='btn-group-lg'>
          <a class="navbar-brand" href="#">Home</a>
          <a class="navbar-brand" href="#">About</a>
          <a class="navbar-brand" href="#">Premium</a>
          <a class="navbar-brand" href="#">Help</a>
          </div>
        </div>
      </nav>
</div>
      <h3 className='text-white bg-dark mb-4 mt-4'>Welcome to My Show</h3>
      <Netflix />

    </div>
  )
}

export default App
