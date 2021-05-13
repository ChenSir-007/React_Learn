import React, { useState } from 'react';
import {Table, Tag, Space, Popconfirm, Button} from 'antd';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { connect } from 'umi';//调用connect
import UserModal from "@/pages/users/components/UserModal";
import {getRemoteList} from "@/pages/users/service";

function table({ users, dispatch,userListLoading}){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [record, setRecord] = useState(undefined);

  const columns = [

    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: text => <a>{text}</a>,
    },
    {
      title: 'Create Time',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={()=>{editHandler(record)}}>Edit</a>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={()=> {
              confirm(record.id)
            }}
            okText="Yes"
            cancelText="No"
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  function confirm(id) {
    dispatch({
      type: 'users/delete',
      payload: id
    })
  }

  function editHandler(record) {
    // console.log(record)
    setIsModalVisible(true);
    setRecord(record);
  }
  const onFinish = async values => {
    let id = 0;
    if(record){
      // @ts-ignore
      id = record.id;
    }
    if(id){await dispatch({
      type: 'users/edit',
      payload: {
        id,
        values,
      },
    });
    }else {
      await dispatch({
        type: 'users/add',
        payload: values
      });
    }
    // console.log('Success:', values);
    setIsModalVisible(false);
  };

  function addHandler() {
    setIsModalVisible(true);
    setRecord(undefined);
  }

  async function requestHandler({pageSize, current}) {
    // await dispatch({
    //   type: 'users/query'
    // })
    const users = await getRemoteList(/*{page: current, per_page: pageSize}*/);
    return{
      data: users.data,
      success: true,
      total: users.meta.total,
    }
  }

  // function onFinish(values){
  //   console.log('Success:', values);
  // }

  return(
    <div className='list-table'>
      <Button type="primary" onClick={addHandler}>Add</Button>
      <ProTable columns={columns} dataSource={users.data} rowKey='id' loading={userListLoading} request={requestHandler} search={false}/>
      <UserModal visible={isModalVisible} setIsModalVisible={setIsModalVisible} record={record} onFinish={onFinish}/>
    </div>
  );
}

//connect链接,{users}对应model中的name
function mapStateToProps({users,loading}) {
  return{
    users,
    userListLoading: loading.models.users,
  };
}

export default connect(mapStateToProps)(table);
