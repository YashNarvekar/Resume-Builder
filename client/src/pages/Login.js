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
      const user = await axios.post("/api/user/login", values);
      message.success("Login Succesfull");
      localStorage.setItem("resumebuilder-users", JSON.stringify(user.data));
      setLoading(false);

      navigate("/home");
    } catch (error) {
      setLoading(false);

      message.error("Login failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("resumebuilder-users")) {
      navigate("/home");
    }
  });

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" delay={500} />}

      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link className="login-btn" to="/register">
            Click Here to Register
          </Link>
          <Button htmlType="submit">Login</Button>
        </div>
      </Form>
    </div>
  );
}
