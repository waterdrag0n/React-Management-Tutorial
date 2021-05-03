import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import React from 'react'

const customer = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/any',
    'name':'홍길동',
    'birthday':'010101',
    'gender':'M',
    'job':'학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/any',
    'name':'ㄱㄴㄷ',
    'birthday':'020202',
    'gender':'M',
    'job':'학생'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/any',
    'name':'ㅁㅂㅅ',
    'birthday':'030303',
    'gender':'F',
    'job':'학생'
  }
]

class App extends React.Component {
  render(){
    return (
      <div>
        {
          customer.map(c=>{
            return (
              <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
            );
          })
        }
      </div>
    );
  }
}

export default App;
