import React from 'react';

import './App.css';


import Name from './Name';
import Description from './Description';
import Image from './Image';
import Price from './Price';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const a= prompt("Enter your first name:");



function App() {

  return (

    <div className='show'>




<div>

<Card style={{ width: 300 }}>
      <Card.Img variant="top"  />< Image />
      <Card.Body>
        <Card.Title>< Name /></Card.Title>
        <Card.Text>
        < Price />
        < Description />
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
<div>

<Card style={{ width: 300 }}>
      <Card.Img variant="top"  />< Image />
      <Card.Body>
        <Card.Title>< Name /></Card.Title>
        <Card.Text>
        < Price />
        < Description />
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      



<div className='alert' style={{ width: 500 }} >
    <h2>hello , {a ? a : "there !"}!</h2>
    {a && <img src='./1.png' alt=''/>}
    </div>



    </div>
  )
}

export default App