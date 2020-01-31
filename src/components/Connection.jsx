import React, { Component } from 'react';
import axios from 'axios'


class Connection extends Component {
    constructor(){
        super()
        this.state = { 
            login:'',
            password:''
         }
    }

     handleChange= async e => {
         let {value,name}=e.target
        this.setState({[name]:value})
      }

      handleSubmit= event =>{
          event.preventDefault()
          const url='localhost:80/projet-uml';
          let data=new FormData()
          data.append('login',this.state.login)  
          data.append('password',this.state.password)  
          axios.post(url,data)
          .then(res=>console.log(res))
          .catch(res=>console.log(res))
          
      }

    render() { 
        return ( 
            <form id='submit'>
            <input type="text" name='login' value={this.state.login} placeholder='Login'onChange={this.handleChange} /> <br/>
            <input type="password" name ='password'  value={this.state.password} placeholder='Password' onChange={this.handleChange} /><br/>
            <button onClick={this.handleSubmit} name='submit'>Submit</button>
        </form>)
            }

}
 
export default Connection;