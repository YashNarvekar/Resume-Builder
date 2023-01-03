import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("/api/user/register", values);
      setLoading(false);
      message.success("Registration Succesfull");
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("resumebuilder-users")) {
      navigate("/home");
    }
  });
  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link className="login-btn" to="/login">
            Click Here to Login
          </Link>
          <Button htmlType="submit">Register</Button>
        </div>
      </Form>
    </div>
  );
}
