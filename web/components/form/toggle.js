import styles from './toggle.module.css';

const Toggle = ({ description, ...props }) => {
  if (description) {
    return (
      <div className={styles['switch-container']}>
        <label class={styles.switch}>
          <input type="checkbox" {...props} />
          <div class={styles.slider}></div>
        </label>
        <span>{description}</span>
      </div>
    );
  } else
    return (
      <label class={styles.switch}>
        <input type="checkbox" {...props} />
        <div class={styles.slider}></div>
      </label>
    );
};

export default Toggle;
