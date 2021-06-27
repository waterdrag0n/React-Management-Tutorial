import React, {Component} from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id':2,
    'image':'https://placeimg.com/64/64/1',
    'name':'A',
    'birthday':'123456',
    'gender':'남자',
    'job':'개발자'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'B',
    'birthday':'234567',
    'gender':'여자',
    'job':'대학생'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'C',
    'birthday':'345678',
    'gender':'남자',
    'job':'백수'
  }
]

class App extends Component{
  render(){
    return (
      customers.map(c=>{
        return(
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })
    );
  }
}

export default App;
