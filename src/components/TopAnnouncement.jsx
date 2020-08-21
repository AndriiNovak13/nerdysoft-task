import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopAnnouncement = ({topItem}) => {
    return (
        <div className="top__item">
            <div className="top__item-title">
                <Link to={`/announcement/${topItem.id}`}>
                    {topItem.Title}
                </Link>
            </div>
            <div className="top__item-date">
               {topItem.DateAdded}
            </div>
        </div>
    )
}

TopAnnouncement.propTypes = {
    topItem: PropTypes.object.isRequired
  };
  TopAnnouncement.defaultProps = {
    topItem: {},
  }

export default TopAnnouncement;
