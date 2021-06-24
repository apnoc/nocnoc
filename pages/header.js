import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tweet from './Tweet'
import path from 'path'
import fs from 'fs'

export default function Home( {tweets }) {
  return( 
    <> 
       <section className="container">
         <div className="row">
           <div className="col-6  p-2 text-left"> <a  href='https://noc.ap.in/'><img src="/assets/logo1.png" alt="logo1" /></a> </div>
           <div className="col-6  p-2 text-right"> <a  href='https://noc.ap.in/'><img src="/assets/logo2.png" alt="logo1" /></a> </div>
         </div>
      </section>
      <div className="container"> 
        {tweets.map(tweet => <Tweet key = {tweet.id} text={tweet.text}  url={tweet.url} />)}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(),'./data.json')
  const tweets = JSON.parse(fs.readFileSync(filePath))
  return {
    props: {
      tweets
    }
  }
}