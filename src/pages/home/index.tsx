import { useEffect, useState } from "react";
import { Button, Form } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

import Arrows from "../../assets/Arrows";
import styles from "./style.module.scss";

import { Message } from "../../components/Message";
import CardSelect from "./components/CardSelect";

export function HomePage() {
  const router = useRouter();
  const [cardForm] = Form.useForm();

  const [select, setSelect] = useState(false);
  const [button, setButton] = useState(false);
  const [opacityButton, setOpacityButton] = useState(false);
  const [titles, setTitles] = useState({
    description: (
      <>
        ¡Bienvenido(a)!, gracias por visitarme,
        <br /> Mi nombre es Giffine.
      </>
    ),
    animate: "animate__fadeIn",
  });

  useEffect(() => {
    setTimeout(function () {
      setTitles({
        description: (
          <>
            Si necesitas ayuda para buscar un regalo
            <br />
            sólo haz click en el botón para comenzar.
          </>
        ),
        animate: "animate__bounce",
      });
      setButton(true);
    }, 2500);
  }, []);

  const hanbldeBegin = () => {
    setTitles({
      description: (
        <>
          ¡Excelente! Ahora cuéntame un poco acerca
          <br />
          de la persona a la que quieres hacerle el regalo
        </>
      ),
      animate: "animate__fadeInDown",
    });
    setButton(false);
    setTimeout(function () {
      setSelect(true);
    }, 1000);
  };

  const handleCardSelect = () => {
    cardForm.validateFields().then((response) => {
      router.push(
        `/results?older=${response.adult}&country=${response.country}&likes=${response.description}`
      );
    });
  };

  return (
    <>
      <div className={styles.home__content}>
        <div className={styles.home__container}>
          <div className={styles.home__innercontainer}>
            <Message title={titles.description} classAnimete={titles.animate} />
            <Image
              src="https://i.ibb.co/m04C4bY/cara2.gif"
              alt="Landscape picture"
              width={476}
              height={420}
            />
            <div>
              {button && (
                <Button
                  onClick={hanbldeBegin}
                  className={`${styles.home__button} animate__animated animate__fadeIn`}
                >
                  Comenzar 🎁
                </Button>
              )}
            </div>
          </div>
          {select && (
            <CardSelect
              setOpacityButton={(data) => setOpacityButton(data)}
              cardForm={cardForm}
              title="¿Qué le gusta a esta persona?"
              subtitle="¿Es mayor de edad esa persona?"
            />
          )}
        </div>
        {select && (
          <div className={styles.home__footercontainer}>
            <Button
              className={styles.home__buttonback}
              onClick={() => cardForm.resetFields()}
            >
              <Arrows className={styles.home__iconbutton} />
              Reiniciar
            </Button>
            <Button
              disabled={!opacityButton}
              onClick={() => handleCardSelect()}
              className={`${
                styles.home__buttonfootter
              } animate__animated animate__fadeIn ${
                !opacityButton ? styles.home__buttonopacity : ""
              }`}
              htmlType={"submit"}
            >
              Buscar 👀
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
