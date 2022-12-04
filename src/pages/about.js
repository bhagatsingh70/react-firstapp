import React from 'react';

class  About extends React.Component{
    constructor(){
        super();
        this.state = {
            showele : 0,
            calldid:0
        }
        this.appendData = this.appendData.bind(this); 
    };
    appendData(){
        console.log('hello');      
       
        this.setState({
            showele: this.state.showele+1
        });
         
    }
    componentWillMount() {
       console.log('componentWillMount Methods prefixed with will are called right before something happens and');
    }

    componentDidMount() {
        console.log(this.state.calldid+1);
        console.log('componentDidMount Methods prefixed with did are called right after something happens');
     }
     componentDidUpdate(prevProps) {
        console.log('componentDidUpdate');
     }
    handleChange(e) {
        // let getTextAreaValue = e.target.value;
        // this.setState({
        //   postVal :getTextAreaValue
        // });
  }
    render(){
        return (
            <div>
            <h1>Welcome About dss dddd</h1>
            <input type="text" value={this.state.showele} onChange={this.handleChange} />
            <input  type="submit" className="button"  onClick={this.appendData}  value="Append"/>
            <input  type="submit" className="button"  onClick={this.appendData}  value="PreAppend"/>
            </div>
        );
    }
}
 
  
export default About;