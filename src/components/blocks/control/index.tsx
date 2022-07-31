import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

type PropsTypes = {
    className: string
}

const BlockControl = ({className}: PropsTypes) => {
    return (
        <div className={clsx(styles['block-control'], className)}>
            <button>add image</button>
            <button>add folder</button>
        </div>
    );
};

export default BlockControl;
