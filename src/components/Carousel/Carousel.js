import React from 'react';
import styles from './Carousel.module.css';
import PropTypes from 'prop-types';

class Carousel extends React.Component  {
    componentDidMount() {
        this.setState({ currentImage: this.props.images[0] });
    }
    constructor(props) {
        super(props);
        this.state = {
            currentImg: "",
        }
    }
    left() {
        const { currentImage } = this.state;
        const { images } = this.props;
        let index = images.indexOf(currentImage);
        /* first image */
        if (currentImage === images[0]) {
            this.setState({ currentImage: images[images.length - 1] });
        } else {
            this.setState({ currentImage: images[index - 1] });
        }
    }
    right() {
        const { currentImage } = this.state;
        const { images } = this.props;
        let index = images.indexOf(currentImage);
        /* first image */
        if (currentImage === images[images.length - 1]) {
            this.setState({ currentImage: images[0] });
        } else {
            this.setState({ currentImage: images[index + 1] });
        }
    }
    render() {
        const { currentImage } = this.state;
        const { size } = this.props;
        return(
            
            <div className={ styles[size] }>
                <span onClick={ () => this.left() } className={ styles.leftArrow }></span>
                <img className={ styles[size] } src={ currentImage } alt=""></img>
                <span onClick={ () => this.right() } className={ styles.rightArrow }></span>
            </div>
        );
    }
}

Carousel.defaultProps = {
    size: "medium"
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"])
}

export default Carousel;