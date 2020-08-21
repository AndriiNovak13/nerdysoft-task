import React from 'react';
import PropTypes from 'prop-types';

import AnnouncementItem from './AnnouncementItem';

const AnnouncementItems = ({announcementsItems, onRemoveAnnouncement, onEditAnnouncement}) => {
  return (
    <div className="announcement__items">
      {
        announcementsItems && 
        announcementsItems.map((item) => (
          <AnnouncementItem
            key={item.id+item.Title}
            item={item}
            onRemoveAnnouncement={onRemoveAnnouncement}
            id={item.id}
            onEditAnnouncement={onEditAnnouncement}
          />
        ))
      }
    </div>
  )
}

AnnouncementItems.propTypes = {
  announcementsItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveAnnouncement: PropTypes.func.isRequired,
  onEditAnnouncement: PropTypes.func.isRequired,
};
AnnouncementItems.defaultProps = {
  announcementsItems: [],
}

export default AnnouncementItems;
