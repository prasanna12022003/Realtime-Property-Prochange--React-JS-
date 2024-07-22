import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { HashLink } from 'react-router-hash-link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { 
    Icon, 
    DropdownMenu,
    DropdownItem,
    Dropdown,
    Rating,
    Button,
    Form,
    Modal, 
    Segment,
    SegmentGroup} from 'semantic-ui-react';
// import { Command } from 'cmdk';
import hlogo from './images/hlogo.jpeg';
import mainlogo from './images/mainlogo.jpeg';
import prev1 from './images/prev1.jpeg';
import prev2 from './images/prev2.jpeg';
import prev3 from './images/prev3.jpeg';
import prev4 from './images/prev4.jpeg';
import logohome from './images/logohome.jpeg';
import logoapart from './images/logoapart.jpeg';
import logocommer from './images/logocommer.jpg';
import UK from './images/UK.jpg';
import USA from './images/USA.jpg';
import GERMANY from './images/GERMANY.jpg';
import IRELAND from './images/IRELAND.jpg';
import './App.css';


const Home=()=>{
    const [formOpen, setFormOpen] = useState(false);
    const [login,setLogin] = useState(true); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [logout, setlogout] = useState(false);
    const [valid, setvalid] = useState(email.split('@')[0]);
    const history = useHistory();
    

    useEffect(() => {
        const emailstored = localStorage.getItem('email');
        const passwordstored = localStorage.getItem('password');
        if(emailstored) setEmail(emailstored);
        if(passwordstored) setPassword(passwordstored);
        setvalid(true);
    }, [])


    const funcLoginClick = () => {
        setLogin(true);
        setFormOpen(true);
    };


    const funcRegisterClick = () => {
        setLogin(false);
        setFormOpen(true);
    };


    const funcClose = () => {
        setFormOpen(false);
    };


    const funcLoginSubmit = (e) => {
        e.preventDefault();
        const regEmail=localStorage.getItem('email', email);
        const regPassword=localStorage.getItem('password', password);
        if(email===regEmail && password===regPassword)
            {
                setErrorMessage('');
                setFormOpen(false);
                // history.push("/main");
            }
        else
            { 
                if (email === '' && password === '') {
                  setErrorMessage('Please enter your email address and password.');
                }
                else {
                  setErrorMessage('Invalid user. Please Register and SignUp');
                }
                setTimeout(() => {
                    setLogin(false);
                    setErrorMessage('');
                }, 1000);
            }

    };


    const funcRegisterSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setErrorMessage('Please enter your username, email, and password.');
            setTimeout(() => {
                setErrorMessage('');
            }, 4000);
        }
        else{
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('Registered Successfully');
            setFormOpen(false);
        }
    }

    const funcNavigation = (path) => {
        if (valid) {
            history.push(path);
        } else {
            setFormOpen(true);
        }
    };

    const funcDropDownClick = (path) => {
        funcNavigation(path);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <div className='App'>
            <div className='whole'>
                <div className='heading'>
                    <div className='header1'>
                        <Icon name='phone' />
                        <p>984-304-1202</p>
                        <Icon name='envelope'/>
                        <p>findeo@gmail.com</p>
                    </div>

                    <div className='header2'>
                        <Icon name='facebook f' />
                        <Icon name='twitter' />
                        <Icon name='google plus g' />
                        <Icon name='pinterest p' />
                    </div>
                </div>
            <div className='fixedheading'>
                <div className='heading-row1'>
                    <img src={hlogo} />

                    <div className='row1'>
                    <Dropdown className='Homes' text='Home'>
                        <DropdownMenu>
                            <DropdownItem text='Home1' onClick={()=>funcDropDownClick('/home1')}/>
                            <DropdownItem text='Home2' onClick={()=>funcDropDownClick('/home2')}/>
                            <DropdownItem text='Home3' onClick={()=>funcDropDownClick('/home3')}/>
                            </DropdownMenu>
                    </Dropdown>

                    <Dropdown className='Listing' text='Listing'>
                        <DropdownMenu>
                            <DropdownItem text='List Layout' onClick={()=>funcDropDownClick('/listlayout')}/>
                            <DropdownItem text='Grid Layout' onClick={()=>funcDropDownClick('/gridlayout')}/>
                            </DropdownMenu>
                    </Dropdown>

                    <Dropdown className='Features' text='Features'>
                        <DropdownMenu>
                            <DropdownItem text='Single Property' />
                            <DropdownItem text='Compare Property' />
                            <DropdownItem text='Submit Property' />
                            </DropdownMenu>
                    </Dropdown>

                    <Dropdown className='Pages' text='Pages'>
                        <DropdownMenu>
                                                                  <DropdownItem text='Blogs' />
                            <HashLink smooth to="#footer-address"><DropdownItem text='Contact' /></HashLink>
                                                                  <DropdownItem text='Elements' />
                                                                  <DropdownItem text='Pricing Tables' />
                        </DropdownMenu>
                    </Dropdown>
                    </div>

                    {/* <div>
                    <Command label="Command Menu">
                        <Command.Input />
                        <Command.List>
                            <Command.Empty>Search</Command.Empty>

                            <Command.Group>
                            <Command.Item>a</Command.Item>
                            <Command.Item>b</Command.Item>
                            <Command.Separator />
                            <Command.Item>c</Command.Item>
                            </Command.Group>

                            <Command.Item>Apple</Command.Item>
                        </Command.List>
                    </Command>
                    </div> */}

                    <div className='row2'>
                        {valid ?(
                            <div>
                                <h4 onClick={()=>setlogout(!logout)}>Hello! {email.split('@')[0]}</h4>
                                {logout && <p style={{color:"red", cursor:"pointer"}} onClick={()=>setvalid(false)}>Logout</p>}
                            </div>
                        ):(
                            <button className='Button' onClick={funcLoginClick}>Login / Register</button>
                        )}
                    </div>

                </div>
            </div>
                
                <div className='heading-row2'>
                    <div className='content-img'>
                        <img src={mainlogo}/>
                    </div>

                    <div className='content'>
                        <h1>Find Your Dream House!</h1>
                        {/* <button onClick={()=>history.push("/sale")} className='sale'>For Sale</button>
                        <button onClick={()=>history.push("/rent")} className='rent'>For Rent</button> */}
                        <button onClick={() => funcNavigation("/sale")} className='sale'>For Sale</button>
                        <button onClick={() => funcNavigation("/rent")} className='rent'>For Rent</button>
                    </div>                
                        
                </div>

                <div className='heading-row3'>
                        <h3>Newly Added</h3>
                </div>

                {/* <marquee> */}
                {/* <div className='preview' id='preview'> */}
            <Slider {...settings}>
                
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

            </Slider>    
                {/* </div> */}
                {/* </marquee> */}
                
        <Modal open={formOpen} onClose={funcClose} closeIcon>
            <Modal.Header>{login ? 'Login' : 'Register'}</Modal.Header>
            <Modal.Content>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <Form onSubmit={login ? funcLoginSubmit : funcRegisterSubmit}>
                {login ? (
                <>
                    <Form.Field>
                    <label>Email</label>
                    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Field>
                    <Button type="submit" onClick={()=>setvalid(true)}>Login</Button>
                    {/* <Button onClick={()=>history.push("/main")}>Login</Button> */}   
                    <Button type="button" onClick={() => setLogin(false)}>Register</Button>
                </>
                ) : (
                <>
                    <Form.Field>
                    <label>Name</label>
                    <input placeholder="Name" />
                    </Form.Field>
                    <Form.Field>
                    <label>Email</label>
                    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Field>
                    <Button type="submit">Register</Button>
                    <Button type="button" onClick={() => setLogin(true)}>Login</Button>
                </>
                )}
            </Form>
            </Modal.Content>
        </Modal>
        
            <div className='heading-row4'>
                <center>
                    <legend><h1>What are you looking for ?</h1></legend>
                </center>
            </div>

            <div className='heading-row5'>
                <div className='lh'>
                    <img src={logohome}/>
                    <center><h4>HOUSES</h4></center>
                </div>
                
                <div className='la'>
                    <img src={logoapart}/>
                    <center><h4>APARTMENTS</h4></center>
                </div>

                <div className='lc'>
                    <img src={logocommer}/>
                    <center><h4>COMMERCIALS</h4></center>
                </div>
            </div>

            <div className='sixth-heading'>
                <center>
                    <div className='heading-row6'><h2>Properties in Most Popular Places</h2></div>
                </center>
            </div>
            <div className='cities'>
            <div className='first2cities'>
                <div className='a1'>
                <img className='uk' src={UK}/>
                <div className='a2'>
                    <h1>UK</h1>
                    <p>8+ Properties</p>
                </div>
                </div>
                <div className='a1'>
                <img className='germany' src={GERMANY}/>
                <div className='a2'>
                    <h1>GERMANY</h1>
                    <p>5+ Properties</p>
                </div>
                </div>
                <div className='a1'>
                <img className='ireland' src={IRELAND}/>
                <div className='a2'>
                    <h1>IRELAND</h1>
                    <p>3+ Properties</p>
                </div>
                </div>
                <div className='a1'>
                <img className='usa' src={USA}/>
                <div className='a2'>
                    <h1>USA</h1>
                    <p>6+ Properties</p>
                </div>
                </div>
            </div>
            </div>

            <div className='footer'>
                <center><h1>We help people and homes find each other.</h1></center>
            </div>

            <div className='footer-content'>
                <div className='footer-img'>
                    <img src={hlogo}/>
                </div>

                <div className='footer-cnt'>
                    <p>Findeo is your trusted partner in real estate, dedicated to helping you find your dream home or sell your property with ease. With a team of experienced agents, innovative tools, and unparalleled customer service, we guide you through every step of the process.</p>
                </div>

                <div className='footer-link'>
                    <h4>Quick Links</h4>
                    <Icon name='angle right'>Home</Icon><br/>
                    <Icon name='angle right'>Buy</Icon><br/>
                    <Icon name='angle right'>Sell</Icon><br/>
                    <Icon name='angle right'>AboutUs</Icon><br/>
                    <Icon name='angle right'>ContactUs</Icon><br/>
                    <Icon name='angle right'>Blog</Icon><br/>
                </div>

                <div className='footer-address' id='footer-address'>
                    <h4>Contact Us</h4>
                    <address>
                    Phone: (984) 304-1202<br/>
                    Email: findeo@gmail.com<br/>
                    Address: 123 Dream Home Lane, HSR Layout, Banglore.
                    </address>
                    <div className='footer-icon'>
                            <Icon name='facebook f' />
                            <Icon name='twitter' />
                            <Icon name='google plus g' />
                            <Icon name='pinterest p' />
                    </div>
                </div>
            </div>
    
            
            <div className='footer-end'>
                <SegmentGroup/>
                <center>
                    {/* <Icon name='creative commons'></Icon> */}
                    <h4>&copy;2024 Findeo. All Rights Reserved!</h4>
                </center>
            </div>

            </div>
        </div>
    );
}

export default Home;