import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';
import IconFolder from '../../icons/folder';

type PropsTypes = {
    tag?: string,
    children: any,
    iconFolder?: any,
    className: string,
    isActive?: boolean,
    type?: string,
    onClick: Function
}

const UiElement = ({tag, children, className, iconFolder, isActive, onClick, type}: PropsTypes) => {
    const [Tag, setTag] = useState('span')
    useEffect(() => {
        if (!tag) return
        setTag(tag)
    }, [])
    return (
        //@ts-ignore
        <Tag className={clsx(
                styles['ui-element'],
                styles[`ui-element--${type}`],
                {[styles['ui-element--active']]: isActive},
                className,
        )} onClick={onClick}>
            {iconFolder && <IconFolder className={styles['ui-element__icon']}/>}
            <span className={styles['ui-element__text']}>{children}</span>
        </Tag>
    );
};

export default UiElement;
