import "./Footer.css"
import {Link} from 'react-router-dom' 
import react from 'react'
import logo from "../assets/prom dogs logo.png"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import image1 from '../assets/IMG-20250523-WA0120.jpg'
import image3 from '../assets/IMG-20250523-WA0118.jpg'
import image2 from '../assets/IMG-20250523-WA0117.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Footer =()=>{
    return(
        <>
        <div className='footer-container'>
            <div className="left-side">
                <Link to='/' className="footer-logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="contact">
                    <WhatsAppIcon className="whatsapp-icon" />
                    <p>11111111</p>
                    <div className="address">
                        <div>8 Hill Avenue, Amersham, HP6 5BW </div>
                        <div> T: 01494 723322   F: 01494 723332 </div> 
                        <div>E: amersham@hunters.com </div>
                    </div>
                    <div className="address">
                        <div>83 High Street, Chesham, HP5 1DE </div>
                        <div> T: 01494 775544   F: 01494 774525 </div> 
                        <div>E: chesham@hunters.com </div>
                    </div>
                </div>
            </div>
            <div className="middle-side">
                <h2 style={{color: 'white', marginBottom: '40px'}}>Gallery</h2>
                <div className="gallery-container">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
                <div className="gallery-container">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className="right-side">
                <h2 style={{color: 'white', marginBottom: '40px'}}>Working Hours</h2>
                <div>Mon-Sun: 08:00-21:00</div>
                <p>Camberley</p>
                <p>Surrey GU15</p>
                <Link style={{color:"white"}}>
                    <InstagramIcon style={{marginTop: '30px', fontSize: '40px'}} />
                </Link>
                <Link style={{color:"white"}}>
                    <GoogleIcon style={{width: '70px', fontSize: '40px'}} />
                </Link>
            </div>
        </div>
        <div style={{backgroundColor: "black", padding: '40px 80px', textAlign: 'center'}}>
            <p>© 2025 Prom Dogs - <Link to="/privacy-policy">Privacy Policy</Link></p>
            <p>Site Design & Maintenance by Awwal Dev</p>
        </div>
        </>
    )
}

export default Footer