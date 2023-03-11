import { useEffect, useState } from "react";
import { Button, Form } from "antd";

import Logo from "../../assets/Logo";
import styles from "./style.module.scss";
import { Message } from "./components/Message";
import CardSelect from "./components/CardSelect";

export function HomePage() {
  const [cardForm] = Form.useForm();
  const [select, setSelect] = useState(true);
  const [button, setButton] = useState(false);
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
    cardForm.validateFields().then((r) => {
      console.log("r...", r);
      const request = `${r.description}, además soy de ${
        r.country
      } y actualmente ${r.adult ? "soy" : "no soy"} mayor de edad`;
      console.log("request...", request);
    });
  };

  return (
    <>
      <div className={styles.home__content}>
        <div className={styles.home__innercontent}>
          <div className={styles.home__container}>
            <Message title={titles.description} classAnimete={titles.animate} />
            <Logo
              className="animate__animated animate__shakeY"
              width={"100%"}
              height={"420"}
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
            {select && (
              <CardSelect
                cardForm={cardForm}
                title="¿Qué le gusta a esta persona?"
                subtitle="¿Es mayor de edad esa persona?"
              />
            )}
          </div>
          <div className={styles.home__footercontainer}>
            <Button onClick={() => cardForm.resetFields()}>Reiniciar</Button>
            <Button
              onClick={() => handleCardSelect()}
              className={`${styles.home__button} animate__animated animate__fadeIn`}
              htmlType={"submit"}
            >
              Buscar 👀
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
