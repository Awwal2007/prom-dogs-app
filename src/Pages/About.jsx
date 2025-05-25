
import react from 'react'
import Section1 from '../Component/section1'
import './About.css'
import banner from '../assets/IMG-20250523-WA0114.jpg'
function About() {
    return(
        <div>
            
            <div className="about-page">
                <div className="about-hero">
                    <img src={banner} alt="About Us" />
                    <h1>About Prom Dogs</h1>
                </div>

                <div className="about-content">
                    <h2>Our Story</h2>
                    <p>
                    Prom Dogs was born from a passion for connecting families with healthy,
                    loving puppies. With years of experience in ethical breeding, we pride
                    ourselves on raising our puppies in a safe and nurturing environment.
                    </p>

                    <p>
                    From selecting the perfect breed to providing ongoing support, we’re here
                    every step of the way. Whether you're adopting your first puppy or adding
                    to your growing family, Prom Dogs is committed to making it a joyful journey.
                    </p>

                    <h2>Why Choose Us?</h2>
                    <ul>
                    <li>✔️ Ethically raised puppies</li>
                    <li>✔️ Health-checked and vaccinated</li>
                    <li>✔️ Experienced and passionate team</li>
                    <li>✔️ Support even after adoption</li>
                    </ul>
                </div>
            </div>
            <Section1 />
        </div>

    )
}

export default About