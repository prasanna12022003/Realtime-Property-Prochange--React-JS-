import React from 'react';
import { Card, Icon, Rating } from 'semantic-ui-react';
import prev1 from './images/prev1.jpeg';
import prev2 from './images/prev2.jpeg';
import prev3 from './images/prev3.jpeg';
import prev4 from './images/prev4.jpeg';

const properties = [
  { image: prev1, name: 'Christy\'s Cottage', location: 'Ireland', area: '2400 Sqft', bedrooms: 3, bathrooms: 3, rating: 5, owner: 'Henry Heinz' },
  { image: prev2, name: 'Matthew Apartments', location: 'UK', area: '540 Sqft', bedrooms: 1, bathrooms: 1, rating: 3, owner: 'John Paul' },
  { image: prev3, name: 'Chris Villas', location: 'Germany', area: '840 Sqft', bedrooms: 2, bathrooms: 2, rating: 4, owner: 'Chester Miller' },
  { image: prev4, name: 'Sereny Uptown', location: 'USA', area: '1240 Sqft', bedrooms: 3, bathrooms: 2, rating: 4, owner: 'Andrew' },
];

const GridLayout = () => (
    <div className='grid-layout'>
        <div className='cards'>
        <img src={prev2}/>
        <div className='cardcontent'>
            <center><h3>Matthew Apartments</h3>
            <p><Icon name='map marker alternate'/>UK</p>
            <p>Area 540 Sqft<br/>Bedrooms 1<br/>Bathrooms 1
            </p>
            <Rating defaultRating={3} maxRating={5} clearable /><br/>
            <a>
                <Icon name='user' />
                John Paul
            </a>
            </center>
            </div>
        </div>


        <div className='cards'>
        <img src={prev3}/>
        <div className='cardcontent'>
            <center><h3>Chris Villas</h3>
            <p><Icon name='map marker alternate'/>Germeny</p>
            <p>Area 840 Sqft<br/>Bedrooms 2<br/>Bathrooms 2
            </p>
            <Rating defaultRating={4} maxRating={5} clearable /><br/>
            <a>
                <Icon name='user' />
                Chester Miller
            </a>
            </center>
            </div>
        </div>

        <div className='cards'>
        <img src={prev4}/>
        <div className='cardcontent'>
            <center><h3>Sereny Uptown</h3>
            <p><Icon name='map marker alternate'/>USA</p>
            <p>Area 1240 Sqft<br/>Bedrooms 3<br/>Bathrooms 2
            </p>
            <Rating defaultRating={4} maxRating={5} clearable /><br/>
            <a>
                <Icon name='user' />
                Andrew
            </a>
            </center>
            </div>
        </div>

        <div className='cards'>
            
        <img src={prev1}/>
        <div className='cardcontent'>
            <center><h3>Christy's Cottage</h3>
            <p><Icon name='map marker alternate'/>Ireland</p>
            <p>Area 2400 Sqft<br/>Bedrooms 3<br/>Bathrooms 3
            </p>
            <Rating defaultRating={5} maxRating={5} clearable /><br/>
            <a>
                <Icon name='user' />
                Henry Heinz
            </a>
            </center>
            </div>
        </div>
    </div>
);

export default GridLayout;
