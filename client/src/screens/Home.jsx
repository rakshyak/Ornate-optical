import React from 'react'
import '../styles/home.css'

const Home = () => (
    <div className="home-container">
        <div className="hero-container">
            <div className="img-hero">
            <img src="https://i.imgur.com/Ydm8IIC.jpg" alt="main glasses image" />
            <div className="bottom-centered">   
                <h2>2020 F/W EYEWEAR COLLECTION</h2>
                <div className="fw-bar">
                <h2>SHOP THE NEW LIMITED EDITION 20-01 COLLECTION</h2>
                </div>
                <button>SHOP WOMEN</button>
                <button>SHOP MEN</button>
                </div>
            </div>
        </div>
        <div className="bseller-header">
            <h2>BESTSELLERS</h2>
            </div>
        <div className="bsellers-container">
            <div className="bseller1">
            <img src="https://i.imgur.com/mAxumVb.png" alt="bestseller-glasses"/>
            </div>
            <div className="bseller2">
                <img src="https://i.imgur.com/l4n1pHT.png" alt="bestseller-glasses" />
            </div>
            <div className="bseller3">
                <img src="https://i.imgur.com/8gI85pZ.png" alt="bestseller-glasses" />
            </div>
            <div className="bseller4">
                <img src="https://i.imgur.com/zTIxzFC.png" alt="bestseller-glasses" />
            </div>
        </div>
    <div className="location-bar">
        <div className="img">
        <img src="https://i.imgur.com/NOozUTB.jpg" alt='optical shop photo' />
        </div>
        <div className="location-details">
        <h2>VISIT OUR NEWEST LOCATION</h2>
        <p>NEW YORK, FLATIRON, USA</p>
        <div className="address-bar">
        <p>111 W. 23RD ST., NEW YORK, NY 10022</p>
        <p>PHONE +1(212)555-5454</p>
        </div>
        <div className="button-bar">
        <button>VIEW STORES</button>
        </div>
        </div>
    </div>
        <div className="bottom-bar">
            <div className="delivery-bar">
            <h3>FREE DELIVERY & RETURNS</h3>
            <p>ENJOY COMPLIMENTARY DELIVERY AND RETURNS FOR ANY PURCHASES OVER $150</p>
            </div>
            <div className="guarantee-bar">
                <h3>5-YEAR GUARANTEE</h3>
                <p>WE OFFER 5 YEARS OF PROTECTION FOR ALL PURCHASES BOUGHT IN-STORE AND ONLINE</p>
            </div>
            <div className="guide-bar">
                <h3>HOLIDAY GUIDE</h3>
                <p>WE HAVE COMPLIMENTARY GIFT-WRAPPING FOR ALL HOLIDAY GIFTS</p>
            </div>
        </div>
        </div>

)
export default Home