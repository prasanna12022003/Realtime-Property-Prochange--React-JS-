import React, { useState } from 'react';
import shome2 from './images/shome2.jpg';
import {Icon,
        Button,
        MenuMenu, MenuItem, MenuHeader, Menu,
        Form, FormField, FormGroup,
        Input,
} from 'semantic-ui-react'
import './home.css';

const Home2=()=>{

    const[loc,setLoc]=useState(false);
    const[cont,setCont]=useState(false);

    return(
        <div>
            <div className='home-tit'>
                <center><h1>StarLight Villas</h1><br/>
                    <Icon name='map marker alternate'/>Toronto, Canada
                    <Button>For Rent</Button>
                </center>
            </div>

            <div className='hwhole'>
                <div className='himg'>
                    <img src={shome2}/>
                </div>

                <div className='hprice'>
                    <Icon name='rupee sign'/><Button>1.19 Cr</Button>
                
                    <Menu vertical>
                        <MenuItem>
                            <MenuHeader>Area</MenuHeader>
                            <MenuMenu>
                                <MenuItem name='1650 sqft'/>
                            </MenuMenu>
                        </MenuItem>

                        <MenuItem>
                            <MenuHeader>Bedrooms</MenuHeader>
                            <MenuMenu>
                                <MenuItem name='2'/>
                            </MenuMenu>
                        </MenuItem>

                        <MenuItem>
                            <MenuHeader>Bathrooms</MenuHeader>
                            <MenuMenu>
                                <MenuItem name='2'/>
                            </MenuMenu>
                        </MenuItem>

                        <MenuItem>
                            <MenuHeader>Hall</MenuHeader>
                            <MenuMenu>
                                <MenuItem name='1'/>
                            </MenuMenu>
                        </MenuItem>
                    </Menu>
                </div>

                <div className='contact-form'> 
                    <button onClick={()=>setCont(!cont)}>Contact</button>
                    {
                        cont && <Form>
                                    <FormGroup widths='equal'>
                                        <FormField label='First name'control={Input} placeholder='Enter Firstname'/>
                                        <FormField label='Last name'control={Input} placeholder='Enter Lastname'/>
                                    </FormGroup>
                                    <FormGroup widths='equal'>
                                        <FormField label='Phone Number'control={Input} placeholder='Enter phone number'/>
                                    </FormGroup>
                                    <FormGroup widths='equal'>
                                        <FormField label='Email'control={Input} placeholder='Enter mail ID'/>
                                    </FormGroup>
                                    <FormGroup>
                                        <FormField control={Button} content='Submit'/>
                                    </FormGroup>
                                </Form>
                    }
                    <button onClick={()=>setLoc(!loc)}>Location</button>
                    {
                        loc && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369104.61887164915!2d-79.37805805!3d43.7182412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1718105597710!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                    }
                </div>     
            </div>

            <div className='hdescription'>
                <p>
                <h4>Dreamy Family Home in Toronto!</h4>

                Welcome to your dream home! Nestled in a quiet, family-friendly neighborhood, this charming 4-bedroom, 3-bathroom house offers a perfect blend of modern amenities and timeless elegance. With 1,650 square feet of living space, this property is designed for comfortable living and entertaining.

                <h4>Key Features:</h4>

                Spacious Living Areas: The open-concept living room features large windows that flood the space with natural light, highlighting the beautiful hardwood floors and cozy fireplace.

                Gourmet Kitchen: The heart of the home is a chef’s delight, equipped with stainless steel appliances, granite countertops, a large island with seating, and ample cabinet space.

                Luxurious Master Suite: The expansive master bedroom offers a peaceful retreat with a walk-in closet and an en-suite bathroom complete with a soaking tub, dual vanities, and a separate shower.

                Outdoor Oasis: Step outside to a beautifully landscaped backyard, perfect for family gatherings and summer barbecues. Enjoy the covered patio, lush lawn, and a charming garden area.

                <h4>Additional Amenities:</h4>

                Home office or study room,
                Finished basement with a media room and gym,
                Two-car garage with additional storage space,
                Central air conditioning and heating,
                Energy-efficient windows and appliances,
                Prime Location: Conveniently located near top-rated schools, shopping centers, parks, and major highways, providing easy access to everything you need.

                This home is perfect for families looking for a move-in ready property with all the modern conveniences and a touch of elegance. Don’t miss the opportunity to make this stunning house your new home.
                </p>
            </div>
        </div>
    );
}

export default Home2;