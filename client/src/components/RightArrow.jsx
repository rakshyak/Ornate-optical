import React from 'react'
import '../styles/rightarrow.css'


const RightArrow = (props) => {
    return (
        <div className="nextArrow" onClick={props.goToNextSlide}>
            <i className="arrow-right" aria-hidden="true"></i>
        </div>
    )
}
export default RightArrow