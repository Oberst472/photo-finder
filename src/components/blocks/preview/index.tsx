import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

import LBlockPreviewInfo from './info';

type PropsTypes = {
    img: string,
    className: string
}

const BlockPreview = ({img, className}: PropsTypes) => {
    const imgRef = useRef(null)
    useEffect(() => {
        console.log(imgRef.current);
    }, [img])

    return (
        <div className={clsx(styles['block-preview'], className)}>
            <div className={styles['block-preview__img-box']}>
                <img className={styles['block-preview__img']} ref={imgRef} src={`img/${img}`} alt={img}/>
            </div>
            <LBlockPreviewInfo className={styles['block-preview__info']}/>
        </div>
    );
};

export default BlockPreview;
