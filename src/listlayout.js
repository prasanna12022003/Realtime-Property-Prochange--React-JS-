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

const ListLayout = () => (
  <div className='listlayout'>
    {properties.map((property, index) => (
      <Card key={index} fluid>
        <Card.Content>
          <img src={property.image} alt={property.name} style={{ width: '100px', float: 'left'}} />
          <Card.Header>{property.name}</Card.Header>
          <Card.Meta><Icon name='map marker alternate' />{property.location}</Card.Meta>
          <Card.Description>
            Area: {property.area}<br />
            Bedrooms: {property.bedrooms}<br />
            Bathrooms: {property.bathrooms}
          </Card.Description>
          <Rating defaultRating={property.rating} maxRating={5} clearable />
          <Card.Meta><Icon name='user' />{property.owner}</Card.Meta>
        </Card.Content>
      </Card>
    ))}
  </div>
);

export default ListLayout;
