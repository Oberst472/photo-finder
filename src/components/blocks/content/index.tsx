import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';
import { Item } from '../../../types';

import BlockList from '../list';
import BlockPreview from '../preview';

type PropsTypes = {
    className: string,
    items: Item[],
    chooseItem: Function,
    img: string
}

const BlockContent = ({className, items, chooseItem, img}: PropsTypes) => {
    return (
        <div className={clsx(styles['block-content'], className)}>
            {items.map((item, index) =>
                <BlockList
                    items={item.children}
                    chooseItem={chooseItem}
                    index={index}
                    key={item.id}
                />
            )}

            {
                img && <BlockPreview
                    img={img}
                    className={styles['block-content__preview']}
                />
            }
        </div>
    );
};

export default BlockContent;
