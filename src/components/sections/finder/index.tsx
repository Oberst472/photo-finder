import React, { useState } from 'react';
import styles from './style.module.scss'

import BlockControl from '../../blocks/control';
import BlockAside from '../../blocks/aside';
import BlockContent from '../../blocks/content';
import info from '../../../mock/index'
import { Item } from '../../../types';

const SectionFinder = () => {
    const [items, setItems] = useState([] as Item[])
    const [activeImg, setActiveImg] = useState('')
    const chooseItem = function (item: Item, id: string, index: number) {
        setActiveImg('')

        if (item.type === 'img') {
            const arr = [...items]
            setActiveImg(item.name)
            const arr2 = arr.slice(0, index + 1)
            setItems(() => arr2)
        } else {
            const arr = [...items]
            if (arr.length) {
                const arr2 = arr.slice(0, index + 1)
                arr2.push(item)
                console.log(arr2);
                setItems(() => arr2)
            } else {
                arr.push(item)
                setItems(() => arr)
            }
            // setItems(() => arr)
        }
    }
    return (
        <section className={styles['section-finder']}>

            <BlockControl
                className={styles['section-finder__control']}
            />
            <BlockAside
                className={styles['section-finder__aside']}
                items={info}
                chooseItem={chooseItem}
            />
            <BlockContent
                className={styles['section-finder__content']}
                items={items}
                chooseItem={chooseItem}
                img={activeImg}
            />
        </section>
    );
};

export default SectionFinder;
