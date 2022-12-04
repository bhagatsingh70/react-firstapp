import React, {Fragment} from "react";
import ErrorModal from '../modal/ErrorModal';

class Signup extends React.Component{
    constructor(){
        super();
      //  this.signup = this.signup.bind(this);
      //  this.data = {};
       this.state ={            
        lable:[
            { name : 'Female', id:1 },
            { name : 'Male', id:12 },
            { name : 'Other', id:13 }
        ]
       }  
    }

   
    signup(e){
    
       e.preventDefault();
       let name = e.target.name.value;
       let email = e.target.email.value;
       let password = e.target.password.value;
      
        const requestOptions = {
            method: 'POST',
             headers: { 'Content-Type': 'application/json', 'Authorization':'Bearer dsfdsfsfdsffsd7fds6f4sd4sd3fds6' },
            body: JSON.stringify({ name: name, email: email, password:password })
        };
        fetch("https://reactapp-7c6f6-default-rtdb.firebaseio.com/register.json",requestOptions)
        .then(res => res.json())
        .then(
        (result) => {
            console.log(result.message);
            console.log("in ajax");
        }, 
        (error) => {
           
        }
        ).catch(error => console.log('error is', error));
        
     }

    handleChange(event) {
        const {value,name} = event.target;
       // this.data[name]=value;
        console.log(name,value,'--daya');
        // let  searchQuery = event.target.name;
        // this.setState({
        //   searchQuery: event.target.value
        // });
      }

      

    render(){
        
        return(
             <Fragment>
                <h1>This is home page</h1>
                <form className="signupFrom" method="post" onSubmit={this.signup}>
                    <label>Name</label><br></br>
                    <input type="text" name="name"  className="form-control"   onChange={this.handleChange} className="name" />
                    <label>Email</label><br></br>
                    <input type="email" name="email"    onChange={this.handleChange}    className="email" />
                   
                  
                    <label>Password</label><br></br>
                    <input type="password" name="password"   onChange={this.handleChange}   className="password" /><br></br>
                    {
                    this.state.lable.map(check => {
                        return <span  key={check.id}><input type="checkbox" id={check.id}/>{check.name} </span> 
                     })
                     }
                        <br></br>
                    <button type="submit"  value="Submit">Submit</button>
                </form>
                <ErrorModal />
                </Fragment>
        );
    }
}
export default Signup;