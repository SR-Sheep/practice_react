import { Component } from 'react';

class Toc extends Component {
  render(){
    console.log("Toc render");

    let lists=[];
    const data = this.props.data;
    let i = 0;
    while(i<data.length){
        lists.push(
            <li key={data[i].id}>
              <a data-id={data[i].id} href={"/content/"+data[i].id}
                onClick={function(e){
                  debugger;
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}>
                {data[i].title}
              </a>
            </li>
        )
        i++;
    }
    return (
      <nav>
          <ul>
              {lists}
          </ul>
      </nav>
    );
  }
}

export default Toc;