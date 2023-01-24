import { ReactComponent as Tesla } from '../../assets/shared/desktop/tesla.svg';
import { ReactComponent as Microsoft } from '../../assets/shared/desktop/microsoft.svg';
import { ReactComponent as HP } from '../../assets/shared/desktop/hewlett-packard.svg';
import { ReactComponent as Oracle } from '../../assets/shared/desktop/oracle.svg';
import { ReactComponent as Google } from '../../assets/shared/desktop/google.svg';
import { ReactComponent as Nvidia } from '../../assets/shared/desktop/nvidia.svg';

function Companies() {
  return (
    <ul className="brands__right">
      <li className="brand-icon">
        <Tesla />
      </li>
      <li className="brand-icon">
        <Microsoft />
      </li>
      <li className="brand-icon">
        <HP />
      </li>
      <li className="brand-icon">
        <Oracle />
      </li>
      <li className="brand-icon">
        <Google />
      </li>
      <li className="brand-icon">
        <Nvidia />
      </li>
    </ul>
  );
}

export default Companies;
