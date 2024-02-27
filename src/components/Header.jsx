import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const logoIcon = <FontAwesomeIcon icon={faScrewdriverWrench} />;
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>Build-a-cv</span>
          {logoIcon}
        </div>
      </div>
    </header>
  );
}
