import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './purchaseForm.module.css';
import { Modal, Form, Input, Button } from 'antd';

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
    transform: 'translate(-100%, 0)',
  },
};

return  <Modal
            onCancel={closeForm}
            open={!!item}
            className={styles.modal}
            styles={customStyles}
            title="Purchase"
            footer={null}
        >
            <Form onFinish={(data) => onSubmit(data)}>
                <div className={styles.main}>
                   <h2>{item.volumeInfo.title}</h2>
                   <Form.Item
                      label="Name"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
                  <Input placeholder='Hanan Kavitz'/>
                </Form.Item>
                <Form.Item
                      label="Phone"
                      name="phone"

                      rules={[
                        {
                          required: true,
                          message: 'Phone is required',
                        },
                      ]}
                    >
                  <Input placeholder='+972' />
                </Form.Item>
                <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your email!',
                          type: 'email'
                        },
                      ]}
                    >
                  <Input placeholder='hananke0@gmail.com'/>
                </Form.Item>
                <Form.Item
                      label="Address"
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your address!',
                        },
                      ]}
                    >
                  <Input />
                </Form.Item>
                <Form.Item
                              >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
               </div>
            </Form>


        </Modal>
};

export default PurchaseForm;
