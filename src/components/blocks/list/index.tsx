import React from 'react';
import styles from './styles.module.scss'
import { Item } from '../../../types';
import UiElement from '../../ui/element';

type PropsTypes = {
    items: Item[],
    chooseItem: Function,
    index: number,
    key: string
}

const BlockList = ({items, chooseItem, index, key}: PropsTypes) => {
    return (
        <ul className={styles['block-list']}>
            {!items.length && <li className={styles['block-list__no-items']}>This folder is empty</li>}

            {items.map((item: Item) =>
                <UiElement
                    tag={'li'}
                    key={item.name}
                    iconFolder={item.type === 'folder'}
                    isActive={false}
                    className={styles['block-list__item']}
                    onClick={() => chooseItem(item, item.id, index)}
                >
                    {item.name}
                </UiElement>
            )}
        </ul>
    );
};

export default BlockList;
