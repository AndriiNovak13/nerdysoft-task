import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ShowAnnouncementItem = ({announcement}) => {
    return (
        <div className="announcement__show-inner">
            <div className="announcement__show-title">
                {announcement.Title}
            </div>
            <div className="announcement__show-text">
                {announcement.Description}
            </div>
            <Link to="/nerdysoft-task">
                <button className="back-btn">Back</button>
            </Link>
        </div>
    )
}

ShowAnnouncementItem.propTypes = {
    announcement: PropTypes.object.isRequired
  };
  ShowAnnouncementItem.defaultProps = {
    announcement: {},
  }

export default ShowAnnouncementItem;
