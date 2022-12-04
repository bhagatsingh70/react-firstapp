import React, { useEffect, useState } from 'react';
import axios from "axios";

class Lists extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error :null,
            isLoded: false,
            mevar : 'hello',
            items:[]
        };
        console.log('page call list');
    }
    componentWillMount() {

        const response =   fetch('http://localhost/test/response.php', {mode:'cors'});
        //const data =   response.json();
        console.log({ response });
      

        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json"
            }})
         .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              mevar : 'hello11',
              items: result
            });
            console.log("in ajax");
          }, 
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        ).catch(error => console.log('error is', error));
 

        // axios({
  
        //     // Endpoint to send files
        //     url: "http://localhost/test/response.json",
        //     method: "GET",
        //     headers: {
        //         "Content-type": "application/json",
 
        //      authorization: "your token comes here",
        //     }, 
        //     //data: formData,
        //   })
        
          
        //     .then((res) => { })
        
         
        //     .catch((err) => { });
     
    
        
        // call api or anything
        //console.log("Component has been rendered", this.state.items);
      }
 
    render(){
     // if (this.state.isLoaded == false) return "Loading!";
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return(      
          <>
          <ul>
            {this.state.items.map(user => (
              <li key={user.id}>
                {user.title}
              </li>
            ))}
          </ul>
          </>
        );
      }
    }
}

export default Lists;