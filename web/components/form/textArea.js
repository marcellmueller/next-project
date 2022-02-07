import styles from './textArea.module.css';

const TextArea = ({ field, ...props }) => {
  return <textarea className={styles.textArea} {...field} {...props} />;
};
export default TextArea;
