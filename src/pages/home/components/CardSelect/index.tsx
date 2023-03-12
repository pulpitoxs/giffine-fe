import React from "react";

import { Form, Input, Select, Radio, FormInstance } from "antd";

import styles from "./style.module.scss";

export interface CardSelectProps {
  title: string;
  subtitle: string;
  cardForm: FormInstance;
  setOpacityButton: (data: boolean) => void;
}

export interface CardFormProps {
  country: string;
  description: string;
}

export default function CardSelect({
  title,
  subtitle,
  cardForm,
  setOpacityButton,
}: CardSelectProps) {
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

  console.log("aaererewrwea");

  return (
    <div className={styles.card__container}>
      <Form
        className={styles.form__container}
        name="card_select"
        style={{ width: "100%" }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ country: "chile", description: "" }}
        //onFinish={handleFinishForm}
        //onFinishFailed={handleFormError}
        autoComplete="off"
        form={cardForm}
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
            onChange={() => {
              console.log("trigger");
              setOpacityButton(true);
            }}
            placeholder="Ejemplo: a esta persona le encanta el anime, sobretodo pokemón y Dragon ball, también es programador, tengo un presupuesto de hasta 100$"
            maxLength={100}
          />
        </Form.Item>
        <div className={styles.card__selectcontainer}>
          <div className={styles.card__subtitle}>{subtitle}</div>
          <Form.Item
            name="adult"
            rules={[
              {
                required: true,
                message: "Please select...",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={false}>No</Radio>
              <Radio value={true}>Si</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
