import React from 'react';
import { useSelector} from 'react-redux';

import ShowAnnouncementItem from '../components/ShowAnnouncementItem';
import TopAnnouncement from '../components/TopAnnouncement';

const ShowAnnouncement = ({match}) => {
    const announcementsItems = useSelector(({Announcement})=>Announcement.announcementsItems);

    const announcement = announcementsItems.find(item => item.id === Number(match.params.id)) || {};

    const showAnnouncementArr = (announcement.Title+' '+announcement.Description).split(' ');
    const topAnnouncementArr = [];
    announcementsItems.filter(item => {
        if(item.id !== announcement.id){
            const announcementElementArr = (item.Title+' '+item.Description).split(' ');

            for(let i of showAnnouncementArr){
                for(let j of announcementElementArr){
                    if(i.toLowerCase() === j.toLowerCase()){
                        if(topAnnouncementArr.includes(item)){
                            continue;
                        }
                        else{
                            topAnnouncementArr.push(item);
                        }
                    }
                }
            }
        }
    });


    return (
        <div className="announcement__box">

        <div className="announcement__page">
            <ShowAnnouncementItem
                announcement={announcement}
            />

        </div>

        <div className="announcement__sidebar">
            <div className="top__title">
                Top 3 similar announcement
            </div>

            <div className="top__inner">
                {
                    topAnnouncementArr.length>0 ? 
                    topAnnouncementArr.map((topItem,index) => (
                        index < 3 &&
                        <TopAnnouncement key={topItem.Title+Math.random()} topItem={topItem} />
                    ))
                    :
                    <h2>Empty</h2> 
                }
            </div>
        </div>
    </div>
    )
}

export default ShowAnnouncement;
