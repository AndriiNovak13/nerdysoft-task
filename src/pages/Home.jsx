import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {fetchAnnouncement, removeAnnouncement, editAnnouncement, setTitleFast} from '../redux/actions/AnnouncementActions';

import Tools from '../components/AnnouncementPage/Tools';
import AnnouncementItems from '../components/AnnouncementPage/AnnouncementItems';

const Home = () => {
    const dispatch = useDispatch();

    const isFetch = useSelector(({Announcement})=>Announcement.isFetch);
    const announcementsItems = useSelector(({Announcement})=>Announcement.announcementsItems);
    const titleFast = useSelector(({Announcement})=>Announcement.titleFast);
    const isLoading = useSelector(({Announcement})=>Announcement.isLoaded);

    const announcementsItemsLength = announcementsItems.length;

    React.useEffect(()=> {
      isFetch &&
      dispatch(fetchAnnouncement());
    }, []);

    const onRemoveAnnouncement = (id) => {
        dispatch(removeAnnouncement(id));
    } 

    const onEditAnnouncement = (item) => {
        dispatch(editAnnouncement(item));
    }

    const onSetTitleFast = (val) => {
        dispatch(setTitleFast(val))
    }

    const searchItems = announcementsItems.filter(item=>item.Title.toLowerCase().includes(titleFast.toLowerCase().trim()))

    return (
        <div className="announcement__box">

          <div className="announcement__inner">
            
            <Tools
              announcementsItemsLength={announcementsItemsLength}
              onSetTitleFast={onSetTitleFast}
            />
            {
              isLoading ?
              <AnnouncementItems
                announcementsItems={searchItems}
                onRemoveAnnouncement={onRemoveAnnouncement}
                onEditAnnouncement={onEditAnnouncement}
              />
              :
              <h2>Loading . . .</h2>
            }

          </div>
        </div>
    )
}

export default Home;
