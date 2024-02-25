/*Login.jsx*/
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;

    // Simulate checking credentials
    if (username === "admin" && password === "admin") {
      // Set auth to true upon successful login
      // Navigate to the admin dashboard
      navigate("/home");
      // Call the onLogin function to indicate successful login
   
    } else {
      // Display error message for invalid credentials
      console.log("Invalid username or password");
    }
  };

  const onFinishFailed = (errorInfo) => {
    // Handle form submission failure
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input aria-label="Username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password aria-label="Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
