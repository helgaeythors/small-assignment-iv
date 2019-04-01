import React from 'react';
import styles from './Row.module.css';
import PropTypes from 'prop-types';

const Row = ({ children }) => {
    return(
        <div className={ styles["row"] }>
            { children }
        </div>
    );
}


Row.propTypes = {
    children: PropTypes.node
}

export default Row;