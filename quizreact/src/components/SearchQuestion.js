import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Button, Modal } from 'antd';
import React, { useState } from 'react';
import AddQuestion from './AddQuestion.js';   // ⬅ 记得导入

const { Search } = Input;

const onSearch = (value) => console.log(value);

const App = () => {

  // 控制添加题目弹窗
  const [open, setOpen] = useState(false);

  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  return (
    <>
      <Space direction="horizontal" size="middle">
        <Search
          placeholder="请输入关键词"
          allowClear
          enterButton="查询题目"
          size="large"
          onSearch={onSearch}
        />

        {/* 添加题目按钮 */}
        <Button type="primary" size="large" onClick={showModal}>
          添加题目
        </Button>
      </Space>

      {/* 弹窗 */}
      <Modal
        title="添加题目"
        open={open}
        footer={null}      // 使用 AddQuestion 自带提交按钮
        onCancel={handleCancel}
      >
        <AddQuestion />
      </Modal>
    </>
  );
};

export default App;
