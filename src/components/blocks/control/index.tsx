import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

import UiBtn from '../../ui/btn'

type PropsTypes = {
    className: string,
    setDownloadActive: Function
}

const BlockControl = ({className, setDownloadActive}: PropsTypes) => {
    const openUpload = function () {
        setDownloadActive(true)
    }
    const addFolder = function () {
    }
    return (
        <div className={clsx(styles['block-control'], className)}>
            <UiBtn className={styles['block-control__btn']} onClick={openUpload} size={'small'}>add image</UiBtn>
            <UiBtn className={styles['block-control__btn']} onClick={addFolder} size={'small'}>add folder</UiBtn>
        </div>
    );
};

export default BlockControl;
