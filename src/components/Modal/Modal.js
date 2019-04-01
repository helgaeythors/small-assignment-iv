import React from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
    return(
        <>
            {
                isOpen ?
                <div className={ styles["modal"] }>
                    
                        <div className={ styles["modalContent"] }>
                            <span onClick={ () => onClose() } className={ styles["modalClose"] }>&times;</span>
                            { children }
                        </div>
                </div>
                : <></>
            }
        </>
    );
}

/* set styles */
Modal.Title = props => (
    <h3 className={ styles["modalItem"] }>{ props.children }</h3>
);

Modal.Body = props => (
    <p className={ styles["modalItem"] }>{ props.children }</p>
);

Modal.Footer = props => (
    <p className={ styles["modalItem"] }>{ props.children }</p>
);

Modal.defaultProps = {
    isOpen: false
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
}

export default Modal;