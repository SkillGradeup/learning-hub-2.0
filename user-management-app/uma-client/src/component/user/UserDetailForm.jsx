// UserDetailsForm.jsx
import React from "react";
import { Form, Input, DatePicker, Button } from "antd";
import moment from "moment";

const UserDetailsForm = ({ initialValues = {}, onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values);
  };

  // Convert the dob value to a moment object if it exists
  initialValues.dob = initialValues.dob
    ? moment(initialValues.dob, "YYYY-MM-DD")
    : null;

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Form.Item
        label="First Name"
        name="user_first_name"
        rules={[{ required: true, message: "Please enter your first name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="user_last_name"
        rules={[{ required: true, message: "Please enter your last name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dob"
        rules={[
          { required: true, message: "Please select your date of birth!" },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Please enter your status!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserDetailsForm;
