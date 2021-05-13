import React, { useEffect } from 'react';
import { Modal, Button, Form, Input } from 'antd';

function UserModal(props) {
  const [form] = Form.useForm();
  // const {onFinish} =props;
  useEffect(()=>{
    if(props.record === undefined){
      form.resetFields();
    }else {
      form.setFieldsValue(props.record);
    }
  },[props.visible])

  function closeHandler() {
    props.setIsModalVisible(false)
  }
  function onOk() {
    form.submit();
    // props.setIsModalVisible(false);
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  // const onFinish = values => {
  //   console.log('Success:', values);
  // };
  return(
    <div>
      <Modal title="Basic Modal" visible={props.visible} onOk={onOk} onCancel={closeHandler} forceRender >
        <Form name="basic" form={form} onFinish={props.onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Create Time" name="create_time">
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
export default UserModal
