import React from 'react';
import {Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {addAnnouncement} from './redux/actions/AnnouncementActions';
import Header from './components/Header';

import Home from './pages/Home';
import ShowAnnouncement from './pages/ShowAnnouncement';



function App() {
  const dispatch = useDispatch();

  const onAddAnnouncement = (obj) => {
    dispatch(addAnnouncement(obj));
  }
  
  return (
    <div className="wrapper">

      <Header
        onAddAnnouncement={onAddAnnouncement}
      />

      <div className="announcement">
        <div className="container">


          <Route exact path="/nerdysoft-task" component={Home} />
          <Route path="/announcement/:id" component={ShowAnnouncement} />


          </div>
        </div>
      </div>
  );
}

export default App;
