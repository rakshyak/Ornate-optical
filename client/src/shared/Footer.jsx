import React from 'react'
import '../styles/footer.css'

const Footer = () => (
	<footer>
		<div className="customer-footer">
		<h3>CUSTOMER SERVICE</h3>
		<ul>
			<div className="contact-bar">
		<li>CONTACT US</li>
		</div>
		<div className="shipping-bar">
		<li>SHIPPING</li>
		</div>
		<div className="return-bar">
		<li>RETURNS</li>
		</div>
		<div className="order-bar">
		<li>TRACK YOUR ORDER</li>
		</div>
		</ul>
		</div>
		<div className="s-ability-footer">
        <h3>SUSTAINABILITY</h3>
		<ul>
			<li>OUR STATEMENT</li>
			<div className="prd-bar">
			<li>PRODUCTION</li>
			</div>
		</ul>
		</div>
		<div className="follow-bar">
        <h3>FOLLOW US ON</h3>
		<ul>	
		<li>INSTAGRAM</li>
		<div className="fbk-bar">
		<li>FACEBOOK</li>
		</div>
		<li>TWITTER</li>
		</ul>
		</div>
	</footer>
)

export default Footer