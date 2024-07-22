import React from 'react'
import {Icon,
        Button,
        } from 'semantic-ui-react';


 const Sale = () => {
    const SaleAPjs=[
        {
            id:'1',
            img: require('./images/ap1sale.jpg'),
            name: "The City Block",
            area: "840 Sqft",
            Bedrooms: "2",
            Hall: "1",
            Kitchen: "1",
            Bathrooms: "2",
            amount: "1.69"
        },
        {
            id:'2',
            img: require('./images/ap2sale.jpg'),
            name: "Kingsford Peak",
            area: "780 Sqft",
            Bedrooms: "2",
            Hall: "1",
            Kitchen: "1",
            Bathrooms: "2",
            amount: "2.45"
        },
        {
            id:'3',
            img: require('./images/ap3sale.jpg'),
            name: "United Units",
            area: "1100 Sqft",
            Bedrooms: "2",
            Hall: "2",
            Kitchen: "1",
            Bathrooms: "2",
            amount: "2.85"
        },
    ];
    const SaleHSjs=[
        {
            id:'3',
            img: require('./images/hs1sale.jpg'),
            name: "Village Villas",
            area: "2400 Sqft",
            Bedrooms: "3",
            Hall: "2",
            Kitchen: "2",
            Bathrooms: "3",
            amount: "1.43"
        },
        {
            id:'4',
            img: require('./images/hs2sale.jpg'),
            name: "WinterSpring Rental",
            area: "1500 Sqft",
            Bedrooms: "2",
            Hall: "2",
            Kitchen: "1",
            Bathrooms: "2",
            amount: "1.87"
        },
    ];


  return (
    <div className='whole-sale'>
        <div className='sale-row1'>
            <center><h1>Properties under Apartments</h1></center>
        </div>

        <div className='sale-row2'>
                <center><h3>Individual Apartments</h3></center>
        </div>

    <div className='sale-row3'>
        {SaleAPjs?.map((data)=>(

            <div className='sale-imgAP'>
            <img src={data.img} />
            <center><h2>{data.name}</h2>
            <h3>Area {data.area}</h3><br/>
            <p>Bedrooms {data.Bedrooms}<br/>Hall {data.Hall}<br/>Kitchen {data.Kitchen}<br/>Bathrooms {data.Bathrooms}</p>
            <Icon name='rupee sign'/><Button>{data.amount} Cr</Button>
            </center>
        </div>
        ))}
    </div>



    <div className='sale-row1'>
            <center><h1>Properties under Houses</h1></center>
        </div>

        <div className='sale-row2'>
                <center><h3>Individual Houses</h3></center>
        </div>

        <div className='sale-row3'>
        {SaleHSjs?.map((data)=>(

            <div className='sale-imgAP'>
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
export default Sale;








