import { Link } from 'react-router-dom';
import '../../styles/ScheduleDemoBtn.css';

function ScheduleDemoBtn() {
  return (
    <div className="demo">
      <Link to={"/pricing"}>Schedule a Demo</Link>
    </div>
  );
}

export default ScheduleDemoBtn;
