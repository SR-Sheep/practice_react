import './App.css';
import { Component } from 'react';
import Subject from './Subject';
import Toc from './Toc';
import Content from './Content';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      subject:{title:"WEB",sub:'World'},
      content:[
        {id:1, title : 'HTML', desc:'HTML is for infomation'},
        {id:2, title : 'CSS', desc:'CSS is for design'},
        {id:3, title : 'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Subject title = {this.state.subject.title} sub={this.state.subject.sub}/>
        <Toc data={this.state.content}/>
        <Content/>
      </div>
    );
  }
}

export default App;
