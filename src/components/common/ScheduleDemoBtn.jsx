import { Link } from 'react-router-dom';
import '../../styles/ScheduleDemoBtn.css';

function ScheduleDemoBtn() {
  return (
    <div className="demo" role='button'>
      <Link to={"/pricing"}>Schedule a Demo</Link>
    </div>
  );
}

export default ScheduleDemoBtn;
