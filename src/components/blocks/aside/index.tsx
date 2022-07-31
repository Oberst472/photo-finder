import React from 'react';
import styles from './style.module.scss'
import clsx from 'clsx';
import UiElement from '../../ui/element';
import { Item } from '../../../types';

type PropsTypes = {
    className: string,
    items: any,
    chooseItem: Function
}

const BlockAside = ({className, items, chooseItem}: PropsTypes) => {
    return (
        <ul className={clsx(styles['block-aside'], className)}>
            {items.map((item: Item) =>
                <UiElement
                    tag={'li'}
                    key={item.name}
                    iconFolder
                    isActive={false}
                    className={styles['block-aside__item']}
                    onClick={() => chooseItem(item, 0)}
                >
                    {item.name}
                </UiElement>
            )}
        </ul>
    );
};

export default BlockAside;
