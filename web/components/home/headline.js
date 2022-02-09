import styles from './headline.module.css';

const Headline = ({ content }) => {
  const { title } = content;
  return <h2 className={styles.headline}>{title}</h2>;
};

export default Headline;
