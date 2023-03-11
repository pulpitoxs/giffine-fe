import styles from "./style.module.scss";

export interface MessageProps {
  title: JSX.Element;
  classAnimete: string;
}

export function Message({ title, classAnimete }: MessageProps) {
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
