import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

type PropsTypes = {
    className?: string
}

const LBlockPreviewInfo = ({className}: PropsTypes) => {
    return (
        <div className={clsx(styles['block-preview-info'], className)}>
            <span className={styles['block-preview-info__title']}>Image JPEG 420 kb</span>
            <div className={styles['block-preview-info__box']}>
                <div className={styles['block-preview-info__item']}>
                    <span>Created</span>
                    <span>Sun, 20.02.2022 at 11:52</span>
                </div>
                <div className={styles['block-preview-info__item']}>
                    <span>Size</span>
                    <span>420</span>
                </div>
                <div className={styles['block-preview-info__item']}>
                    <span>File resolution</span>
                    <span>300x300</span>
                </div>
            </div>
        </div>
    );
};

export default LBlockPreviewInfo;
