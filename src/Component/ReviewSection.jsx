import StarsIcon from '@mui/icons-material/Stars';
import react from 'react'
import "./ReviewSection.css"
const ReviewSection =()=>{
    return(
        <div className='review-container'>
            <h1>Prom Dogs Reviews</h1>
            <h4>Read what new puppy owners think of our service.</h4>
            <div className='review-child'>
                <div>
                    <h2>David Seaman</h2>
                    <div className='star-container'>
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                    </div>
                    <p>I bought my puppy from Prom Dogs. The communication and professionalism was exceptional. Yuliia answered all my questions and supported us through the whole process. The puppy pack was amazing, and we’re very happy with our puppy. I also know that I can always go back to her with any questions and expert advice if I need it.</p>
                </div>
                <div>
                    <h2>John Doe</h2>
                    <div className='star-container'>
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                    </div>
                    <p>I bought my puppy from Prom Dogs. The communication and professionalism was exceptional. Yuliia answered all my questions and supported us through the whole process. The puppy pack was amazing, and we’re very happy with our puppy. I also know that I can always go back to her with any questions and expert advice if I need it.</p>
                </div>
                <div>
                    <h2>Ryan Gigs</h2>
                    <div className='star-container'>
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                        <StarsIcon fontSize="small" />
                    </div>
                    <p>I bought my puppy from Prom Dogs. The communication and professionalism was exceptional. Yuliia answered all my questions and supported us through the whole process. The puppy pack was amazing, and we’re very happy with our puppy. I also know that I can always go back to her with any questions and expert advice if I need it.</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewSection