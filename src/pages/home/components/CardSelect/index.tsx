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
      label: "🇨🇱 CL",
      value: "MLC",
    },
    {
      label: "🇦🇷 AR",
      value: "MLA",
    },
    {
      label: "🇲🇽 MX",
      value: "MLM",
    },
    {
      label: "🇨🇴 CO",
      value: "MCO",
    },
    {
      label: "🇸🇻 SV",
      value: "MSV",
    },
    {
      label: "🇳🇮 NI",
      value: "MNI",
    },
    {
      label: "🇪🇨 EC",
      value: "MEC",
    },
    {
      label: "🇵🇪 PE",
      value: "MPE",
    },
    {
      label: "🇩🇴 RC",
      value: "MRC",
    },
    {
      label: "🇨🇺 CU",
      value: "MCU",
    },
    {
      label: "🇧🇴 BO",
      value: "MBO",
    },
    {
      label: "🇬🇹 GT",
      value: "MGT",
    },
    {
      label: "🇨🇷 CR",
      value: "MCR",
    },
    {
      label: "🇵🇦 PA",
      value: "MCR",
    },
    {
      label: "🇭🇳 HN",
      value: "MHN",
    },
    {
      label: "🇻🇪 VE",
      value: "MLV",
    },
    {
      label: "🇺🇾 UY",
      value: "MLU",
    },
    {
      label: "🇵🇾 PY",
      value: "MPY",
    },
  ];

  return (
    <div className={styles.card__container}>
      <Form
        className={styles.form__container}
        name="card_select"
        style={{ width: "100%" }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{
          country: "MLC",
          /*           description: "quiero regalar una laptop rosada con accesorios kawai",
          adult: true, */
        }}
        //onFinish={handleFinishForm}
        //onFinishFailed={handleFormError}
        autoComplete="off"
        form={cardForm}
      >
        <div className={styles.card__contenttitle}>
          <div className={styles.card__title}>{title}</div>
          <Form.Item
            style={{ width: "95px" }}
            name="country"
            rules={[
              {
                required: true,
                message: "Country...",
              },
            ]}
          >
            <Select
              placeholder="Country"
              onChange={() => {
                cardForm
                  .validateFields()
                  .then(() => {
                    setOpacityButton(true);
                  })
                  .catch(() => {
                    setOpacityButton(false);
                  });
              }}
            >
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
              cardForm
                .validateFields()
                .then(() => {
                  setOpacityButton(true);
                })
                .catch(() => {
                  setOpacityButton(false);
                });
            }}
            placeholder="Ejemplo: a esta persona le encanta el anime, sobretodo pokemón y Dragon ball, también es programador, invertiré en esa persona especial..."
            maxLength={100}
            rows={4}
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
            <Radio.Group
              onChange={() => {
                cardForm
                  .validateFields()
                  .then(() => {
                    setOpacityButton(true);
                  })
                  .catch(() => {
                    setOpacityButton(false);
                  });
              }}
            >
              <Radio value={false}>No</Radio>
              <Radio value={true}>Si</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
