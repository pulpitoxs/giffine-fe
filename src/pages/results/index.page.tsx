import { useState } from "react";
import { Col, Row, Button } from "antd";
import Image from "next/image";

import styles from "./style.module.scss";

import { Message } from "../../components/Message";
import { Loading } from "./components/Loading";
import { LoadingOk } from "./components/LoadingOk";
import Logo from "../../assets/Logo";

export default function Results() {
  const isLoading = false;
  const [titles] = useState({
    description: (
      <>
        ¡Genial! Aquí te presento algunas ideas de regalos que podrían ser
        perfectos para tu pareja considerando sus intereses:
      </>
    ),
    animate: "animate__fadeIn",
  });

  const data = [
    {
      img: "https://i.ibb.co/09KPd7S/pexels-photo-821651.webp",
      title: "The Calamaro Files - Martin Perez - Gourmet Musical -Libro",
      price: "$27.990",
      id: "MLA1108740292",
    },
    {
      img: "https://i.ibb.co/09KPd7S/pexels-photo-821651.webp",
      title: "The Calamaro Files - Martin Perez - Gourmet Musical -Libro",
      price: "$27.990",
      id: "MLA1108740222292",
    },
    {
      img: "https://i.ibb.co/09KPd7S/pexels-photo-821651.webp",
      title: "The Calamaro Files - Martin Perez - Gourmet Musical -Libro",
      price: "$27.990",
      id: "MLA11087342440222292",
    },
    {
      img: "https://i.ibb.co/09KPd7S/pexels-photo-821651.webp",
      title: "The Calamaro Files - Martin Perez - Gourmet Musical -Libro",
      price: "$27.990",
      id: "333343",
    },
    {
      img: "https://i.ibb.co/09KPd7S/pexels-photo-821651.webp",
      title: "The Calamaro Files - Martin Perez - Gourmet Musical -Libro",
      price: "$27.990",
      id: "3333234343",
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    return <LoadingOk />;
  }

  return (
    <>
      <div className={styles.results__content}>
        <Row>
          <Col span={16}>
            <div className={styles.results__mensaggecontent}>
              <div className={styles.results__mensaggecontainer}>
                <Message
                  title={titles.description}
                  classAnimete={titles.animate}
                />
                <Logo
                  className="animate__animated animate__shakeY"
                  width={"100%"}
                  height={"420"}
                />
                <div className={styles.results__contentbutton}>
                  <Button className={styles.results__sidebabuttonok}>
                    Dame más opciones 😃
                  </Button>
                  <Button className={styles.results__sidebabutton}>
                    No hagas clic aquí 💀
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.results__sidebar}>
              {data.map((item) => (
                <div className={styles.results__sidebarbox} key={item.id}>
                  <Row>
                    <Col span={7} className={styles.results__sidebarimage}>
                      <Image
                        src={item.img}
                        alt="Producto de meli"
                        width={100}
                        height={100}
                      />
                    </Col>
                    <Col span={17}>
                      <h3 className={styles.results__sidebartitle}>
                        {item.title}
                      </h3>
                      <span className={styles.results__sidebarprice}>
                        {item.price}
                      </span>
                      <Image
                        src="https://i.ibb.co/xH09JzY/image-2.png"
                        alt="Producto de meli"
                        width={31}
                        height={21}
                        className={styles.results__sidebarmarca}
                      />
                    </Col>
                  </Row>
                  <div className={styles.results__sidebacontentbutton}>
                    <Button className={styles.results__sidebabuttonok}>
                      Comprar 🤑
                    </Button>
                    <Button className={styles.results__sidebabutton}>
                      Eliminar 💩
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
