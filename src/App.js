import React, {Component} from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [
  { //실제로 보내고자하는 데이터 명시
  'ondo' : 1,
  'pump' : '1',
  'ondo' : '10.2',
  'sepdo' : '13.2',
  'hontak' : '15',
  'toyang' : '16'  
},
{ 
  'ondo' : 2,
  'pump' : '1',
  'ondo' : '20.2',
  'sepdo' : '23.2',
  'hontak' : '25',
  'toyang' : '26'  
},
{ 
  'ondo' : 3,
  'pump' : '1',
  'ondo' : '30.2',
  'sepdo' : '33.2',
  'hontak' : '35',
  'toyang' : '36'  
}
]

class App extends Component {
  render() {
  return (
    <div>
      {  customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            pump={c.pump}
            ondo={c.ondo}
            sepdo={c.sepdo}
            hontak={c.hontak}
            toyang={c.toyang}
            />
          )
        })  }
    </div>
  );
}
}
export default App;
