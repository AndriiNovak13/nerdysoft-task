import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Popup from './Popup';

const Header =({onAddAnnouncement}) => {
    const [visiblePopup, setVisiblePopup] = React.useState(false);

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const announcementsItems = useSelector(({Announcement})=>Announcement.announcementsItems);

    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <div className="header__item-logo">
                        <Link to="/nerdysoft-task">
                            Announcement
                        </Link>
                    </div>
                    <div className="header__item-add">
                        <button onClick={toggleVisiblePopup}>
                            add announcement
                        </button>
                    </div>
                </div>
            </div>

            {
                visiblePopup && 
                <Popup
                    closePopup={toggleVisiblePopup}
                    onAddAnnouncement={onAddAnnouncement}
                    announcementsItems={announcementsItems}
                />
            }

        </header>
    )
}

Header.propTypes = {
    onAddAnnouncement: PropTypes.func.isRequired
};


export default Header;
