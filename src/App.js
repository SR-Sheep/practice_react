import './App.css';
import { Component } from 'react';
import Subject from './Subject';
import Toc from './Toc';
import Content from './Content';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title = "동물" sub="고양이"/>
        <Toc/>
        <Content/>
      </div>
    );
  }
}

export default App;
