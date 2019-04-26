import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  { //실제로 보내고자하는 데이터 명시
  'id' : 1,
  'ondo' : '10.2',
  'sepdo' : '13.2',
  'hontak' : '15',
  'toyang' : '16',
  'pump' : '1'  
},
{ 
  'id' : 2,
  'ondo' : '20.2',
  'sepdo' : '23.2',
  'hontak' : '25',
  'toyang' : '26',
  'pump' : '1'  
},
{ 
  'id' : 3,
  'ondo' : '30.2',
  'sepdo' : '33.2',
  'hontak' : '35',
  'toyang' : '36',
  'pump' : '1'  
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
           <TableCell>번호</TableCell>
           <TableCell>온도</TableCell>
           <TableCell>습도</TableCell>
           <TableCell>혼탁도</TableCell>
           <TableCell>토양수분</TableCell>
           <TableCell>펌프</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
      {  customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            ondo={c.ondo}
            sepdo={c.sepdo}
            hontak={c.hontak}
            toyang={c.toyang}
            pump={c.pump}
            />
          )
        })  }
        </TableBody>
      </Table>
    </Paper>
  );
}
}
export default withStyles(styles)(App);
