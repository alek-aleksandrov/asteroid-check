import { Component } from 'react';
import './App.css';
import { queryNEOs } from './api/nasa';

class App extends Component {
  state: {objects: unknown[]} = {
    objects: []
  }

  async getApi() {
    const res = await queryNEOs();
    const objs = await res.json();
    console.log(objs.near_earth_objects);
    this.setState({objects: objs.near_earth_objects});
  }
  
  render() {  
    return (
      <div className='flex flex-col min-h-screen place-content-between'>
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <div>
          <h1>Think you've had a bad day?</h1>
          <h2>See how bad it could've been</h2>
        </div>
        <div className="card flex gap-10 max-h-200 justify-center">
          <button onClick={() => this.getApi()}>Get Recent Passes</button>
          <button onClick={() => this.getApi()}>Get Closest Distance Today</button>
          <button onClick={() => this.getApi()}>Get Biggest Asteroid Today</button>
        </div>
        <div className='results grid grid-flow-row auto-cols-auto'>
          {this.state.objects.map((obj: unknown, i: number) => <div key={i}>{obj.name}</div>)}
        </div>
      </div>
    )
  }
}



export default App
