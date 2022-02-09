import { FlickerScroll } from 'react-flicker-scroll';
import styles from './flickerText.module.css';

const FlickerText = ({ items }) => {
  return (
    <div className={styles['flicker-container']}>
      {items &&
        items.map((item, i) => {
          return (
            <FlickerScroll className={styles['flicker-item']} key={i}>
              {item}
            </FlickerScroll>
          );
        })}
    </div>
  );
};

export default FlickerText;
