import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
function SkillsEducation() {
  return (
    <div>
      <h5>
        <b>Education</b>
      </h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "qualification"]}
                      label="Qualification"
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Qualification" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "percentage"]}
                      label="Percentage"
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Percentage" />
                    </Form.Item>
                  </div>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "institution"]}
                      label="Institution Name"
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                      label="Year Range"
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Year Range" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 20, color: "red" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5>
        <b>Skills</b>
      </h5>
      <hr />
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "technology"]}
                      label="Skill Name"
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Technology" />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      label="Out of 10"
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="rating" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 20, color: "red" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default SkillsEducation;
