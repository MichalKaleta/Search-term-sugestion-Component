import React, { Component } from 'react';
import jsonp from 'jsonp';           ///    or axios if not jsnop req


export default class Search extends Component {
  constructor(props){
    super(props); 
    this.state = { 
            term: '',
            cities : [] 
          };
    this.apiUrl = this.props.options.apiUrl ;
    this.length = this.props.options.length;
    }
  
  fillList(city, index){
    console.log(  this.apiUrl )
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
    jsonp( this.apiUrl+value, null, (err, data ) => {
      if (err) {
         console.error(err.message);
      } else {
         data.length = this.length;                   
         this.setState(  {  cities: data  } )   
      }
    });
  }

  render() {  
    return (
      <form className="form-inline">
        <div className ="form-group position-relative">
          <input type="text" className="form-control" name ='city' placeholder="City Name" autocomplete="off"
                 value= {this.state.term} 
                 onChange = { ev =>   this.onInputChange(ev)  }
          />   
          <ul className='sugestion-list'> 
            {
              this.state.cities
              .filter( city => city!=='%s' )
              .map( (city,index) => this.fillList(city,index) )  
            }
          </ul>
          <button type="submit" className="btn btn-primary"
                    onClick ={ ev => ev.preventDefault() }> 
              Search
          </button>
        </div>      
      </form>
    );
  }
}
