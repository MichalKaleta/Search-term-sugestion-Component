import React, { Component } from 'react';
import jsonp from 'jsonp';

export default class App extends Component {
  constructor(){
    super(); 
    this.state = {  cities : [] };

  }

  fillList(city){
    
    return (
        <li className="list-group-item list-group-item-action " >{ city }</li>
      )   
  }

  onInputChange(value){
    jsonp("http://gd.geobytes.com/AutoCompleteCity?callback?&filter=?&q="+value, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(data)
         this.setState(  { cities : data } )
      }
    });
  }

  render() {  
    return (
        <div>
          <form className="form-inline">
            <div className ="form-group position-relative">
             
              <input type="text" className="form-control" name ='city'id="city" placeholder="City Name"
                      onKeyUp = {  ev => this.onInputChange(ev.target.value)   } />   
                  <ul className='sugestion-list'>
                    { this.state.cities.map(city => this.fillList(city) )  }
                  </ul>
            </div>
                <button type="submit" className="btn btn-primary mb-2"
                        onClick ={ ev => ev.preventDefault() }> Search </button>
          </form>
      </div>
    );
  }
}
