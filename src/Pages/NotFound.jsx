import {Link} from 'react-router-dom'
import react from 'react'

const NotFound =()=>{
    return(
        <div style={{justifySelf: 'center', marginBottom: '130px'}}>
            <h1 style={{textAlign:"center", marginTop:"100px", marginBottom: '30px'}}>Page Not Found</h1>
            <Link style={{color: 'white'}} to="/">
                <button style={{backgroundColor: 'blue', padding: '20px 15px', justifySelf: 'center'}}>
                    Go Back To Home Page
                </button>
            </Link>
        </div>
    )
}
export default NotFound