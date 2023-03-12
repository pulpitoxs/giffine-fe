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
      value: "MLO",
    },
    {
      label: "🇸🇻 SV",
      value: "MSV",
    },
    {
      label: "🇳🇮 MNI",
      value: "MNI",
    },
    {
      label: "🇪🇨 MEC",
      value: "MEC",
    },
    {
      label: "🇵🇪 MPE",
      value: "MPE",
    },
    {
      label: "🇩🇴 MRC",
      value: "MRC",
    },
    {
      label: "🇨🇺 MCU",
      value: "MCU",
    },
    {
      label: "🇧🇴 MBO",
      value: "MBO",
    },
    {
      label: "🇬🇹 MGT",
      value: "MGT",
    },
    {
      label: "🇨🇷 MCR",
      value: "MCR",
    },
    {
      label: "🇭🇳 MHN",
      value: "MHN",
    },
    {
      label: "🇻🇪 MLV",
      value: "MLV",
    },
    {
      label: "🇺🇾 MLU",
      value: "MLU",
    },
    {
      label: "🇵🇾 MPY",
      value: "MPY",
    },
  ];
  console.log("o");

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
          /*           description: "quiero regalar una galaxia entera",
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
