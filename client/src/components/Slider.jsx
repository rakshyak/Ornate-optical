import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import '../styles/slider.css'

export default class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                'https://i.imgur.com/07ou4xE.jpg',
                'https://i.imgur.com/7Vhg74b.jpg',
                'https://i.imgur.com/wGHDNM0.jpg'
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))

    }

    goToNextSlide = () => {

        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }))
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">
                <div className="left-arrow">

                    <LeftArrow
                        goToPrevSlide={this.goToPrevSlide}
                    />
                </div>

                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s',
                    }}>

                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>
                <div className="right-arrow">

                    <RightArrow
                        goToNextSlide={this.goToNextSlide}
                    />
                </div>
            </div>
        )
    }
}