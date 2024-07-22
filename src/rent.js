import React from 'react'
import {Icon,
        Button,
        } from 'semantic-ui-react';



const Rent = () => {
    const RentAPjs=[
        {
            id:'1',
            img: require('./images/ap2Rent.jpg'),
            name: "The Brooklyn Block",
            area: "840 Sqft",
            Bedrooms: "2",
            Hall: "1",
            Kitchen: "1",
            Bathrooms: "2",
            amount: "2.01"
        },
        {
            id:'2',
            img: require('./images/ap3Rent.png'),
            name: "Hopeful Homes",
            area: "980 Sqft",
            Bedrooms: "2",
            Hall: "1",
            Kitchen: "1",
            Bathrooms: "2",
            amount: "2.45"
        },
        {
            id:'3',
            img: require('./images/ap1Rent.jpg'),
            name: "The Chimneys",
            area: "690 Sqft",
            Bedrooms: "2",
            Hall: "1",
            Kitchen: "1",
            Bathrooms: "2",
            amount: "1.39"
        },
    ];
    const RentHSjs=[
        {
            id:'3',
            img: require('./images/hs1Rent.jpg'),
            name: "Getaway Escapes",
            area: "2400 Sqft",
            Bedrooms: "3",
            Hall: "2",
            Kitchen: "2",
            Bathrooms: "3",
            amount: "3.45"
        },
        {
            id:'4',
            img: require('./images/hs2Rent.jpg'),
            name: "Sweet Home Rentals",
            area: "1500 Sqft",
            Bedrooms: "2",
            Hall: "2",
            Kitchen: "1",
            Bathrooms: "2",
            amount: "2.98"
        },
    ];


    return (
        <div className='whole-rent'>
            <div className='rent-row1'>
                <center><h1>Properties under Apartments</h1></center>
            </div>
    
            <div className='rent-row2'>
                    <center><h3>Individual Apartments</h3></center>
            </div>
    
        <div className='rent-row3'>
            {RentAPjs?.map((data)=>(
    
                <div className='rent-imgAP'>
                <img src={data.img} />
                <center><h2>{data.name}</h2>
                <h3>Area {data.area}</h3><br/>
                <p>Bedrooms {data.Bedrooms}<br/>Hall {data.Hall}<br/>Kitchen {data.Kitchen}<br/>Bathrooms {data.Bathrooms}</p>
                <Icon name='rupee sign'/><Button>{data.amount} Cr</Button>
                </center>
            </div>
            ))}
        </div>
    
    
    
        <div className='rent-row1'>
                <center><h1>Properties under Houses</h1></center>
            </div>
    
            <div className='rent-row2'>
                    <center><h3>Individual Houses</h3></center>
            </div>
    
            <div className='rent-row3'>
            {RentHSjs?.map((data)=>(
    
                <div className='rent-imgAP'>
                <img src={data.img} />
                <center><h2>{data.name}</h2>
                <h3>Area {data.area}</h3><br/>
                <p>Bedrooms {data.Bedrooms}<br/>Hall {data.Hall}<br/>Kitchen {data.Kitchen}<br/>Bathrooms {data.Bathrooms}</p>
                <Icon name='rupee sign'/><Button>{data.amount} Cr</Button>
                </center>
            </div>
            ))}
        </div>
    
    
    
        </div> 
      );
    } 

export default Rent;
