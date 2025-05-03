import styles from './Hidden.module.css';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import { useNavigate } from 'react-router-dom';

const Hidden = ({ backUrl }) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <div className="container">
      <div className={styles.buttons}>
        <OutlinedButton
          customClass={styles.hideButton}
          onClick={handleBack}
          text={'Вернуться в приложение'}
        />
      </div>
    </div>
  );
};

export default Hidden;
