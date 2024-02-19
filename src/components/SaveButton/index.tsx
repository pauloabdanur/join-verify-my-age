import styles from './styles.module.css';

const SaveButton = () => {
  return (
    <div>
      <button className={styles.saveBtn} type="submit" name="saveBtn">
        Save
      </button>
    </div>
  );
};

export default SaveButton;
