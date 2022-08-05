import React from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

import ImageUploading from 'react-images-uploading';
import IconDelete from '../../icons/delete';
import IconUpdate from '../../icons/update';
import UiBtn from '../../ui/btn';



type propsTypes = {
    className: string,
    children: string,
    setDownloadActive: Function
}

const UiUploadFile = ({className, children, setDownloadActive}: propsTypes) => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const sendImages = function () {
        setImages([])
        setDownloadActive(false)
        console.log(66);
    }
    return (
        <div className={clsx(styles['ui-upload-file'], className)}>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                  }) => (
                    // write your building UI
                    <div>
                        <div className={styles['ui-upload-file__box']}>
                            <div
                                className={clsx(
                                    styles['ui-upload-file__area'],
                                    {[styles['ui-upload-file__area--active']]: isDragging}
                                )}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                {children}
                            </div>
                            &nbsp;
                            {/*<button onClick={onImageRemoveAll}>Remove all images</button>*/}

                            <div className={styles['ui-upload-file__items']}>
                                {imageList.map((image, index) => (
                                    <div key={index} className={styles['ui-upload-file__item']}>
                                        <div className={styles['ui-upload-file__img-box']}>
                                            <img className={styles['ui-upload-file__preview']} src={image['data_url']} alt="" width="100"/>
                                        </div>
                                        <div className={styles['ui-upload-file__btns']}>
                                            <button
                                                className={clsx(styles['ui-upload-file__btn'], styles['ui-upload-file__btn-update'])}
                                                onClick={() => onImageUpdate(index)}
                                            >
                                                <IconUpdate/>
                                            </button>

                                            <button
                                                className={clsx(styles['ui-upload-file__btn'], styles['ui-upload-file__btn-delete'])}
                                                onClick={() => onImageRemove(index)}
                                            >
                                                <IconDelete/>
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            {images.length > 0 && <UiBtn className={styles['ui-upload-file__save-btn']} onClick={sendImages}>Download</UiBtn>}
                        </div>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default UiUploadFile;
