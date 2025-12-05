import React, { useState } from 'react';
import { Input, Space, Button, Modal } from 'antd';
import AddUser from './AddUser.js';

const { Search } = Input;
const onSearch = (value) => console.log(value);

const App = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  return (
    <>
      <Space direction="horizontal" size="middle">
        <Search
          placeholder="请输入用户名"
          allowClear
          enterButton="查询用户"
          size="large"
          onSearch={onSearch}
        />

        <Button type="primary" size="large" onClick={showModal}>
          添加用户
        </Button>
      </Space>

      <Modal
        title="添加用户"
        open={open}
        footer={null}
        onCancel={handleCancel}
      >
        <AddUser />
      </Modal>
    </>
  );
};

export default App;