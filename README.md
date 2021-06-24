This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




.nav__links {
  list-style: none;
  display: inline-block;
  background:#f0f0f0;
}
.nav__links ul {
  list-style: none;
  padding: 0;
  margin:0;
  
}

.nav__links ul li {
  display: inline-block;
  padding: 0px 2px;  
  margin-top:20px;
}
.nav__links li a {
  width: 150px;
  display: block;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
}
.nav__links li a:hover {
  color:#fff ;
  background-color: #f65a64;
  padding: 5px;
}
.nav__links ul li ul li{
  float:none;
}

.nav__links ul li ul {
  display: none;
}
.nav__links ul li:hover ul {
  display: block;
}

 .cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.5rem;
	padding: 1rem;
	
}
 .card {
  display: flex;
  display: inline-block;
	flex-direction: column;
	flex: 1 0 300px;
	max-width: 450px;
	overflow: hidden;
	background: #fff;
	color: #000;
	border:  1px;
	border-radius: 5px;
	
	text-decoration: none;
	font-size: 1rem;
	
	 background-color: #fff;
    box-shadow:0px 0px 1px 1px #E2E9ED;
    padding:60px 10px;
    position:relative;
    z-index: 0;
    transition:0.2s all;
}
 .card:hover {
	z-index: 1;
	box-shadow: 0 8px 50px rgba(0,0,0,0.2);
	transform: scale(1.0);
 
}
 .card__image {
	range: center;
	text-align: center;	
	display: block;
	
}
 .card__content {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1 rem;
}
 .card__title {
	text-align: center;
	font-size: 1.75rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}
 .card__snippet {
  margin-bottom: 0.5rem;
  text-align: center;
  border:  1px;
  padding: 15px;
  
}


 .card__sociallinks {
	
    text-align: center;
    border:  1px; 
    border-style: dotted;
}

.card__socialicons{
	margin: 10px;
	list-style-type: none;
	float: left;

}

.card__socialicons li {
	display: inline-block;
	padding: 1 rem;
}

  

.card__Button {
	float: right;
  text-align: center;
  float: right;
  border:  1px;
  padding: 10px 80px ;
  border-left-style: dotted;
}

.card__Button:hover {
	background-color: #f65a64;
}
 

.footer-top {
    background-color: #3d3d3d;
    padding: 1rem 0 1rem 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .footer-bottom {
    background-color: #000000;
    padding: 1rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .footer-subscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
  }
  
  .footer-subscription > p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
      font-weight: 10px;
  }
  
  .footer-subscription-heading1 {
    margin-bottom: 24px;
    font-size: 20px;
  }
  .footer-subscription-heading2 {
    margin-bottom: 24px;
    font-size: 18px;
  }
  
  .logo1 {
    margin: 5px 5px 5px 5px ;
    padding: 2rem 2rem 2rem 2rem;
  }
  
  .logo2 {
    margin: 5px 5px 5px 5px ;
    padding: 2rem 2rem 2rem 2rem;
    
  }
  
  .v1{
    background-color: #ffffff;
    width: 1px;
    height: 60px;
    right: -2px;
    top: 0;
    position: absolute;
    content: "";
  }




import Tweet from './Tweet'
import fetch from 'isomorphic-unfetch'


function Home(props)
{
  
  console.warn("data",props)
            return <>
            
            <ul  ><li >
              {
                props.data.map(data=>(                              
                    <h4 key={data.id}>{data.value}</h4>      
                ))                
              }
              </li></ul>  
               
            </>   
}


Home.getInitialProps=async function () 
{
  const res = await fetch(`http://10.72.4.133:3000/api/`)
  const data = await res.json()
  return {
    data
  }
}
export default Home;



import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';

import data from '../Data/data.json'; 
class Infrastructures extends Component {
	render() {
		return (
            <div>
              <Header />
                {
                  data.Infrastructures.map((infrastructure) => {
                    return (
                        <section className="container">
                            <h2> {infrastructure.title}</h2>
                            {
                                          infrastructure.paragraph.map((paragraphDetail) => {
                                            return (
                                                <div>
                                                <p> {paragraphDetail.p} </p>
                                                </div>
                                            );
                                          })
                                          
                                       }
			                  </section>                      
                    );
                  })
                } 
	
            </div>

        );
    }
} 
export default Infrastructures;# nocnoc
