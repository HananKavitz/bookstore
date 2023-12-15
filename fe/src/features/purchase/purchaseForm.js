import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from './purchaseForm.module.css';
import Modal from 'react-modal';

const PurchaseForm = ({item,children, closeForm, onSubmit}) => {
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

return  <Modal
            onRequestClose={closeForm}
            isOpen={item}
            className={styles.modal}
            styles={customStyles}
            contentLabel="Example Modal"

        >
            <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className={styles.main}>
                   <h2>{item.volumeInfo.title}</h2>
                   <input {...register('name', { required: true })} className={styles.item} placeholder={'Name'}/>

                   <input {...register('phone', { required: true })} className={styles.item}  placeholder={'Phone'}/>
                   <input {...register('email', { required: true })} className={styles.item}  placeholder={'Email'}/>
                   <input {...register('address', { required: true })} className={styles.item}  placeholder={'Address'}/>
                   <input type="submit" />
               </div>
            </form>


        </Modal>
};

export default PurchaseForm;
