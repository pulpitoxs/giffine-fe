import React from "react";

import { Form, Input, Select, Button } from "antd";

import styles from "./style.module.scss";

export interface CardSelectProps {
  title: string;
}

export interface CardFormProps {
  country: string;
  description: string;
}

export default function CardSelect({ title }: CardSelectProps) {
  const { Option } = Select;

  const selectOptions = [
    {
      label: "⚽ CL",
      value: "chile",
    },
    {
      label: "⚽ VE",
      value: "venezuela",
    },
  ];

  const handleFinishForm = (item: CardFormProps) => {
    console.log("item...", item);
  };

  const handleFormError = (error: unknown) => {
    console.log("error...", error);
  };

  return (
    <div className={styles.card__container}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={handleFinishForm}
        onFinishFailed={handleFormError}
        autoComplete="off"
      >
        <div className={styles.card__contenttitle}>
          <div className={styles.card__title}>{title}</div>
          <Form.Item
            style={{ width: "125px" }}
            name="country"
            rules={[
              {
                required: true,
                message: "Country...",
              },
            ]}
          >
            <Select defaultValue="⚽ CL" placeholder="Country" allowClear>
              {selectOptions.map((item, index) => (
                <Option value={item.value} key={index}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your desired description...",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
