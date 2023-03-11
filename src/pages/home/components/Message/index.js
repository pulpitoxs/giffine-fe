import styles from "./style.module.scss";

export function Message(props) {
  const { title, classAnimete } = props;
  return (
    <>
      <div
        className={`${styles.message__content} animate__animated ${classAnimete}`}
      >
        <h1 className={styles.message__title}>{title}</h1>
      </div>
    </>
  );
}
