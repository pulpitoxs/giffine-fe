import { useState, useEffect } from "react";
import { Col, Row, Button } from "antd";
import Confetti from "react-confetti";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";

import styles from "./style.module.scss";

import { Message } from "../../components/Message";
import { Loading } from "./components/Loading";
import { LoadingOk } from "./components/LoadingOk";
import Logo from "../../assets/Logo";

import { useRouter } from "next/router";

import { fetchRequestGiftApi } from "../api";

export default function Results() {
  const [width, height] = useWindowSize();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loadingSuccess, setLoadingSuccess] = useState(true);
  const [titles] = useState({
    description: (
      <>
        ¡Genial! Aquí te presento algunas ideas de regalos que podrían ser
        perfectos para tu pareja considerando sus intereses:
      </>
    ),
    animate: "animate__fadeIn",
  });
  const [results, setResult] = useState(null);
  const [randomOption, setRandomOption] = useState<any>(null);

  const handleGenerateResults = (data: any) => {
    setRandomOption(null);
    const items = data;
    const index = Math.floor(Math.random() * items?.boxes.length);

    setTimeout(() => {
      setRandomOption({ ...items?.boxes[index] });
    }, 250);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = Object.fromEntries(url.searchParams.entries());

    if (searchParams) {
      fetchRequestGiftApi({
        older: searchParams.older as string,
        country: searchParams.country as string,
        likes: searchParams.likes as string,
      })
        .then((response) => {
          setLoading(false);
          setLoadingSuccess(true);
          if (!response.data.response) {
            router.push(`/error?message=${response.data.message}`);
          } else {
            const result = response?.data.data;
            setResult(result);
            setRandomOption(result?.boxes[0]);
            setTimeout(() => {
              setLoadingSuccess(false);
            }, 7000);
          }
        })
        .catch(() => {
          router.push(`/error?message=ocurrió un error en la consulta...`);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (loadingSuccess) {
    return <LoadingOk />;
  }

  return (
    <>
      <div className={styles.results__content}>
        <Row>
          <Col span={16}>
            <Confetti width={width * 0.66} height={height} />
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
                  <Button
                    onClick={() => handleGenerateResults(results)}
                    className={styles.results__sidebabuttonok}
                  >
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
              {randomOption && (
                <>
                  {randomOption.items.map((item: any, index: number) => (
                    <div
                      className={styles.results__sidebarbox}
                      key={`${item.id}-${index}`}
                    >
                      <Row>
                        <Col span={6} className={styles.results__sidebarimage}>
                          <Image
                            src={item.img}
                            alt="Producto de meli"
                            width={100}
                            height={100}
                          />
                        </Col>
                        <Col span={18}>
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
                        <Button
                          className={styles.results__sidebabuttonok}
                          href={item.link}
                          target="_blank"
                        >
                          Comprar 🤑
                        </Button>
                        <Button className={styles.results__sidebabutton}>
                          Eliminar 💩
                        </Button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
