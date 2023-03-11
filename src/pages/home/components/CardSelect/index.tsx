import React from "react";

import { Form, Input, Select, Radio } from "antd";

import styles from "./style.module.scss";

export interface CardSelectProps {
  title: string;
  subtitle: string;
}

export interface CardFormProps {
  country: string;
  description: string;
}

export default function CardSelect({ title, subtitle }: CardSelectProps) {
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
        className={styles.form__container}
        name="basic"
        style={{ width: "100%" }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ country: "⚽ CL", description: "" }}
        onFinish={handleFinishForm}
        onFinishFailed={handleFormError}
        autoComplete="off"
      >
        <div className={styles.card__contenttitle}>
          <div className={styles.card__title}>{title}</div>
          <Form.Item
            style={{ width: "85px" }}
            name="country"
            rules={[
              {
                required: true,
                message: "Country...",
              },
            ]}
          >
            <Select placeholder="Country">
              {selectOptions.map((item, index) => (
                <Option value={item.value} key={index}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          style={{ width: "100%" }}
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your desired description...",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Ejemplo: a esta persona le encanta el anime, sobretodo pokemón y Dragon ball, también es programador, tengo un presupuesto de hasta 100$"
            maxLength={100}
          />
          <div>
            <div className={styles.card__subtitle}>{subtitle}</div>
            <div>
              <Radio defaultChecked={false}>Disabled</Radio>
              <Radio defaultChecked>Disabled</Radio>
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
