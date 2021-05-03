import './App.css';
import Customer from './components/Customer'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles'

const styles = theme =>({
  root: {
    width:'100%',
    marginTop: theme.spacing.unit*3,
    overflowX: "auto"
  },
  tbl:{
    minWidth: 1080
  }
})

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
    'job':'개발자'
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
    const { classes } = this.props
    return (
        <Paper classname={classes.root}>
          <Table classname = {classes.tbl}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
          customer.map(c=>{return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})
        }
          </TableBody>
        </Table>
        </Paper>
    );
  }
}

export default withStyles(styles)(App);
