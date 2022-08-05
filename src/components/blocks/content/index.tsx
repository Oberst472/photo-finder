import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';
import { Item } from '../../../types';

import BlockList from '../list';
import BlockPreview from '../preview';
import UiUploadFile from '../../ui/upload-file';

type PropsTypes = {
    className: string,
    items: Item[],
    chooseItem: Function,
    img: string,
    isDownloadActive: boolean,
    setDownloadActive: Function


}

const BlockContent = ({className, items, chooseItem, img, isDownloadActive, setDownloadActive}: PropsTypes) => {
    return (
        <div className={clsx(styles['block-content'], className)}>
            {items.map((item, index) =>
                <BlockList
                    items={item.children}
                    chooseItem={chooseItem}
                    index={index}
                    key={item.id.toString()}
                />
            )}

            {
                img && <BlockPreview
                    img={img}
                    className={styles['block-content__preview']}
                />
            }
            {isDownloadActive &&
                <UiUploadFile
                setDownloadActive={setDownloadActive}
                className={styles['block-content__upload']}
                >
                    Drag and drop or upload files
                </UiUploadFile>}
        </div>
    );
};

export default BlockContent;
