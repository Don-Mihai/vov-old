import { useParams } from 'react-router-dom';
import ItemEquip from '../../components/ItemEquip/ItemEquip';
import { slidesForeign } from '../ForeignEquip/ForeignEquip';

const RussianItem = () => {
  const { id, tab } = useParams();
  const item = slidesForeign[tab].find((item) => item.id === Number(id));
  return (
    <ItemEquip
      titleColor={'#333E6F'}
      title={item.title}
      src={item.src}
      description={item.description}
    />
  );
};

export default RussianItem;
