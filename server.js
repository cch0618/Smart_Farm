const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([
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
      ]);
});

app.listen(port, () =>console.log(`Listening on port ${port}`));