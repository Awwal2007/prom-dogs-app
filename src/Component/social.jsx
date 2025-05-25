import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Social.css"
const Social =()=> {
    const [showSocial, setShowSocial] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(()=> {
        const mediaQuery = window.matchMedia('(max-width: 768px');
        const handleMediaChange = ()=> setIsSmallScreen(mediaQuery.matches);
        handleMediaChange();
        mediaQuery.addEventListener('change', handleMediaChange)
        return () => mediaQuery.removeEventListener('change', handleMediaChange)
    }, []);
    return(
        <div className='social' style={{flex: isSmallScreen && showSocial ? 1 : isSmallScreen && 0, display: isSmallScreen && showSocial ? 'flex' : isSmallScreen && "none"}}>
            <Link style={{color: 'white'}}>
                <FacebookIcon />
            </Link>
            <Link style={{color: 'white'}}>
                <XIcon />
            </Link>
            <Link style={{color: 'white'}}>
                <PinterestIcon />
            </Link>
            <Link style={{color: 'white'}}>
                <LinkedInIcon />
            </Link>
        </div>
    )
}

export default Social