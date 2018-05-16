import React, { Component } from 'react';
import jsonp from 'jsonp';

export default class App extends Component {
  constructor(){
    super(); 
    this.state = { 
      term: '',
      cities : [] };
    }

  fillList(city, index){
  
    return (
        <li key ={index} 
            className="list-group-item list-group-item-action" 
            onClick= { () => this.setState( { term: city } ) } >
          { city }
        </li>
   
      )   
  }

  onInputChange(ev){

    var value = ev.target.value;
    this.setState( { term: value } )
    jsonp("http://gd.geobytes.com/AutoCompleteCity?callback?&filter=?&q="+value, null, (err, data) => {
      if (err) {
         console.error(err.message);
      } else {
         data.length = 5;
         this.setState(  {  cities: data  } )
      }
    });
  }

  render() {  

    return (
        <div>
          <form className="form-inline">
            <div className ="form-group position-relative">
             
              <input type="text" className="form-control" name ='city' placeholder="City Name"
                     value= {this.state.term}
                     onChange = { ev => {  this.onInputChange(ev) } }
                       />   
                  <ul className='sugestion-list'> {
                          this.state.cities
                          .filter( city => city!=='%s' )
                          .map( (city,index) => this.fillList(city,index) )  
                 }</ul>
                  <button type="submit" className="btn btn-primary"
                          onClick ={ ev => ev.preventDefault() }> 
                    Search
                  </button>
            </div>      
          </form>
      </div>
    );
  }
}
