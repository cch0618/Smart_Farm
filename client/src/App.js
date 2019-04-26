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

class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

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
      {this.state.customers ? this.state.customers.map(c => {
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
        }) : ""}
        </TableBody>
      </Table>
    </Paper>
  );
}
}
export default withStyles(styles)(App);
