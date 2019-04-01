import React from 'react';
import styles from './DatePicker.module.css';
import PropTypes from 'prop-types';

const DatePicker = ({ onDatePick, locale }) => {
    const dateLocale = (string, onDatePick, locale) => {
        let date = new Date(string);
        onDatePick(date.toLocaleDateString(locale));
    };

    return(
            <input type="date" onChange={ e => dateLocale(e.target.value, onDatePick, locale) } className={ styles["datePicker"] }/>
    );
};

DatePicker.defaultProps = {
    locale: "is-IS"
}

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string
}

export default DatePicker;