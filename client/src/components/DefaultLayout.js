import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./../resources/defaultlayout.css";
import { Link, useNavigate } from "react-router-dom";
function DefaultLayout(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("resumebuilder-users"));

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("resumebuilder-users");
          navigate("/login");
        }}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          SHEY CV
        </h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button className="button-1" icon={<UserOutlined />}>
            {user.username}
          </Button>
        </Dropdown>
      </div>
      <div className="content" style={{ overflow: "scroll" }}>
        {props.children}
      </div>
    </div>
  );
}

export default DefaultLayout;
