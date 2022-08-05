import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

type PropsTypes = {
    className?: string,
}


const IconDelete = ({className}: PropsTypes) => {
    return (
        <span className={clsx(styles['icon'], className)}>
               <svg className={styles['icon__svg']} width="14" height="18" viewBox="0 0 14 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM11 6V16H3V6H11ZM1 4H13V16C13 17.1 12.1 18 11 18H3C1.90002 18 1 17.1 1 16V4Z" fill="currentColor"/>
                </svg>
        </span>
    );
};

export default IconDelete;
