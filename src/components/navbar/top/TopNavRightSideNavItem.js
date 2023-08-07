import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotificationDropdown from 'components/navbar/top/NotificationDropdown';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { topNavbarBreakpoint } from 'config';
import { useTranslation } from 'react-i18next';

const TopNavRightSideNavItem = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { t } = useTranslation();
  const handleToggle = () => {
    setShowSearch(!showSearch);
  };
  const onHelp = () => {
    //Go to Help
  };
  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      {showSearch && (
        <Nav
          navbar
          className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
          as="ul"
        >
          <Nav.Item as="li">
            <SearchBox autoCompleteItem={[]} />
          </Nav.Item>
        </Nav>
      )}
      <Nav.Item as={'li'}>
        <Nav.Link className="px-2 theme-control-toggle" onClick={handleToggle}>
          <div className="theme-control-toggle-label">
            <FontAwesomeIcon icon={'search'} className="fs-0" />
          </div>
        </Nav.Link>
      </Nav.Item>

      <NotificationDropdown />
      <Nav.Item as={'li'}>
        <Nav.Link className="px-2" onClick={onHelp}>
          <div className="">{t('Help')}</div>
        </Nav.Link>
      </Nav.Item>
      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
