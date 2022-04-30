import './App.css';
import { Component } from 'react';
import Subject from './Subject';
import Toc from './Toc';
import Content from './Content';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      mode : 'read',
      subject:{title:"WEB",sub:'World'},
      welcome:{title : "Welcome",desc:"Hello, React!"},
      content:[
        {id:1, title : 'HTML', desc:'HTML is for infomation'},
        {id:2, title : 'CSS', desc:'CSS is for design'},
        {id:3, title : 'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

   



  render(){
    console.log("App render");
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.content[0].title;
      _desc = this.state.content[0].desc;
    }


    return (
      <div className="App">
        <Subject title = {this.state.subject.title} sub={this.state.subject.sub}/>
        <Toc data={this.state.content}/>
        <Content title={_title} desc={_desc}/>
        <span>{_title} / {_desc}</span>
        <button type='submit' onClick={
            function (e){
              console.log(e);
              e.preventDefault(); //해당 태그의 기본적인 동작 초기화(stop)
              if(this.state.mode === 'welcome'){
                this.setState({mode:"read"}); //state는 바로 바꿀 수 없고, setter를 이용해야 함
              }else{
                this.setState({mode:"welcome"}); //state는 바로 바꿀 수 없고, setter를 이용해야 함
              }
              //debugger; //개발자 도구를 열고, 해당 코드 실행시 표시가 되며 잠시 자바스크립트가 멈춤
            }
            .bind(this)
        }>mode 변경</button>
      </div>
    );
  }
}

export default App;
