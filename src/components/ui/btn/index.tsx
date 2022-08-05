import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

type propsTypes = {
    className: string,
    onClick: Function,
    children: string,
    size?: string,
    theme?: string,
}

const uiBtn = ({className, children, size, theme, onClick}: propsTypes) => {
    return (
        <button className={clsx(
            className,
            styles['ui-btn'],
            styles[`ui-btn--size-${size || 'default'}`],
            styles[`ui-btn--theme-${theme || 'default'}`],
        )}
        onClick={() => onClick()}>
            <span className={styles['ui-btn__text']}>{children}</span>
        </button>
    );
};

export default uiBtn;
