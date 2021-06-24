import React from 'react';
import { CardGroup, Card, CardImg, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../Data/data.json'; 

class Events extends Component {
	render() {
		return (
            <div>
				 <Header /> 
                {
                  data.Events.map((event) => {
                    return (
                        <section className="container">
			    <CardGroup >
				<div className="col-m-4">
				  <Card className=" ">
				    <CardImg className="img"  style={{backgroundColor:"#005a87"}} variant="top" src={event.img} />
				    <CardBody>
					<CardTitle>{event.title}</CardTitle>
					<card><CardText>{event.text} </CardText></card>
					<Card><Button>hello</Button></Card>
				    </CardBody>
				    
				  </Card>
				</div>  
			     </CardGroup>
			</section>                      
                    );
                  })
                } 
		
            </div>

        );
    }
} 
export default Events;




import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ({ posts }) => {
  return(
    <>
       {posts.map(post => (
         <li>{post.key}</li>
         ))
       }
    </>
  );
};


Home.getInitialProps=async () =>  
{
  const res = await fetch(`http://10.242.162.231:3040/api/data`)
  const posts = await res.json()
  return {
    posts
  }
}
export default Home;
