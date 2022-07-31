import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

type PropsTypes = {
    className: string
}


const IconFolder = ({className}: PropsTypes) => {
    return (
        <span className={clsx(styles['icon'], className)}>
            <svg className={styles['icon__svg']} width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 0H8L10 2H18C19.1 2 20 2.9 20 4V14C20 15.1 19.1 16 18 16H2C0.899994 16 0 15.1 0 14L0.0100098 2C0.0100098 0.900002 0.899994 0 2 0ZM9.17001 4L7.17001 2H2V14H18V4H9.17001Z" fill="currentColor"/>
            </svg>
        </span>
    );
};

export default IconFolder;
