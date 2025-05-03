import styles from './Bottom.module.css';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import { useNavigate } from 'react-router-dom';

const Bottom = ({ backUrl }) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(backUrl ? backUrl : '/main');
  const handleHide = () => navigate('/hidden');

  return (
    <div className={styles.buttons}>
      <OutlinedButton
        customClass={styles.backButton}
        onClick={handleBack}
        text={'Назад'}
      />

      <OutlinedButton
        customClass={styles.hideButton}
        onClick={handleHide}
        text={'Скрыть все элементы'}
      />
    </div>
  );
};

export default Bottom;
