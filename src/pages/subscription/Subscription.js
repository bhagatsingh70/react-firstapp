import { useState, createContext  } from "react";
import Container from '../container/Container';
import {ReactDOM} from "react-dom/client";

function Subscription(){
    const UserContext = createContext()
    const [user, setUser] = useState("Jesse Hall");
    const [dynamicVar, setdynamicVar] = useState("");
    const dates = new Date('2022','11','26');
    const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //  console.log(event.toLocaleDateString('default', options));// ar-EG timezone

    const [title, setTitle] =useState('test')
    const [form, setForm]= useState({title:'', sdate:''})
    //...form spread operator for containing inputs

    const titleChangeHandler  =(event)=>{
        setForm({...form, title:event.target.value})
        setForm((prevState)=>{
            return {...prevState, title:event.target.value}
        })

        console.log(form);
    }
    const dateChangeHandler  =(event)=>{
        setForm({...form, sdate:event.target.value})
        setForm((prevState)=>{
            return {...prevState, sdate:event.target.value}
        })

        console.log(form);
    }

    const onClickHandler  =()=>{
        console.log('click  ddd ');
        setTitle('new title dd')
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        const data = {title: form.title, sdate: form.sdate};
        console.log('click  submitHandler ', data);

        for(let i=1; i<=10; i++){
            setdynamicVar(i+1)
            console.log('i--  ', i);
        }
    }
    const variables = {
        title:'Subscription Page',
        name:'spage'
    }
    return (
        <div>
              <UserContext.Provider value={user}>
                <Container {...variables}>
                    <p>Subscrption</p>
                    <p>{dates.toLocaleDateString('default', {month:'long'})}</p>
                    <p>{dates.toLocaleDateString('default', {day:'2-digit'})}</p>
                    <p>{dates.getFullYear()}</p>
                    <p>{title}</p>

                    <form onSubmit={submitHandler}>
                        {dynamicVar} test 
                        <input type="text"  placeholder="Title" onChange={titleChangeHandler}/>
                        <input type="date"  placeholder="Date"  onChange={dateChangeHandler}/>
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={onClickHandler}>Click</button>
                </Container>
             </UserContext.Provider>
        </div>
    )
}

export default Subscription