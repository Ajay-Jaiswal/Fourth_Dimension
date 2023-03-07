
import React,{useEffect , useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Footer } from './Footer';

const Contact =  () => {

const [data, setData] = useState([])
useEffect(()=>{
  fetch("http://localhost:4000/get").then((result)=>{
    result.json().then((resp)=>{
      setData(resp.data)
      console.log(resp.data)
    })
  })
},[])

 return (
  <div>

  {
  data.map((item,c)=>
 

<Card className="text-center">
      <Card.Header>title = {item.title}</Card.Header>
      <Card.Body>
        <Card.Title>{item.crime}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          {item.criminal}
        </Card.Text>
        <Card.Text>
          {item.offense}
        </Card.Text>
        <Card.Text>
          {item.guilt}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
  }
  
</div>


 )}
  export default Contact

  