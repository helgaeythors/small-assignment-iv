import React from 'react';
import styles from './CreativeCommonsImageSpinner.module.css';
import PropTypes from 'prop-types';

import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import snapchat from '../../images/snapchat.png';
import twitter from '../../images/twitter.png';

class CreativeCommonsImageSpinner extends React.Component {
    componentDidMount() {
        let length = CreativeCommonsImageSpinner.images.length;
        let index = length - 1;
        let timer = this.props.interval * 1000;
        setInterval(() => {
            
            if (index === length - 1) {
                index = 0;
            } 
            else {
                index++;
            }
            this.setState({ currentImg: CreativeCommonsImageSpinner.images[ index ] });
        }, timer);
    }
    constructor(props) {
        super(props);
        this.state = {
            currentImg: CreativeCommonsImageSpinner.images[0]
        }
    }
    render() {
        const { currentImg } = this.state;
        let index = CreativeCommonsImageSpinner.images.indexOf(currentImg);
        return(
            <div className={ styles.container }>
                <div className={ styles.spinner }>
                    <img className={ styles.image } src={ currentImg } alt={ "spinner: " + currentImg }></img>
                </div>
            </div>
        );
    }
}

CreativeCommonsImageSpinner.images = [
    instagram, youtube, snapchat, facebook, twitter
];

CreativeCommonsImageSpinner.defaultProps = {
    interval: 3
}

CreativeCommonsImageSpinner.propTypes = {
    interval: PropTypes.number
}

export default CreativeCommonsImageSpinner;