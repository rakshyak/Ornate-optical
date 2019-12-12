import React from'react'
import '../styles/leftarrow.css'


const LeftArrow = (props) => {
    return (
        <div className="backArrow" onClick={props.goToPrevSlide}>
            <i className="arrow-left" aria-hidden="true"></i>
        </div>
    )
}
export default LeftArrow