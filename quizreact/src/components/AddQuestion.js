import { Form, Input, Button, Select } from 'antd';
import React from 'react';

const { TextArea } = Input;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};

const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

const AddQuestion = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('题目信息：', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="addQuestion"
      onFinish={onFinish}
      scrollToFirstError
    >
      {/* 题目 */}
      <Form.Item
        name="question"
        label="题目"
        rules={[{ required: true, message: '请输入题目内容！' }]}
      >
        <TextArea rows={3} placeholder="请输入题目内容" />
      </Form.Item>

      {/* 选项 A */}
      <Form.Item
        name="optionA"
        label="选项 A"
        rules={[{ required: true, message: '请输入选项A！' }]}
      >
        <Input placeholder="请输入选项 A" />
      </Form.Item>

      {/* 选项 B */}
      <Form.Item
        name="optionB"
        label="选项 B"
        rules={[{ required: true, message: '请输入选项B！' }]}
      >
        <Input placeholder="请输入选项 B" />
      </Form.Item>

      {/* 选项 C */}
      <Form.Item
        name="optionC"
        label="选项 C"
        rules={[{ required: true, message: '请输入选项C！' }]}
      >
        <Input placeholder="请输入选项 C" />
      </Form.Item>

      {/* 选项 D
      <Form.Item
        name="optionD"
        label="选项 D"
        rules={[{ required: true, message: '请输入选项D！' }]}
      >
        <Input placeholder="请输入选项 D" />
      </Form.Item> */}

      {/* 正确答案 */}
      <Form.Item
        name="answer"
        label="正确答案"
        rules={[{ required: true, message: '请选择正确答案！' }]}
      >
        <Select placeholder="请选择正确答案">
          <Select.Option value="A">A</Select.Option>
          <Select.Option value="B">B</Select.Option>
          <Select.Option value="C">C</Select.Option>
          <Select.Option value="D">D</Select.Option>
        </Select>
      </Form.Item>

      {/* 提交按钮 */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddQuestion;
