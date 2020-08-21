import React from 'react';
import PropTypes from 'prop-types';


const Tools = ({announcementsItemsLength, onSetTitleFast}) => {
    const [inputFind, setInputFind] = React.useState('');
    const changeInputFind = e => {
        setInputFind(e.target.value);
        onSetTitleFast(e.target.value);
    }

    return (
        <div className="tools">
            <div className="tools__box">
                <div className="tools__item-search">
                    <input
                        type="text"
                        placeholder="Enter a title"
                        value={inputFind}
                        onChange={changeInputFind}
                    />
                </div>
                <div className="tools__item-count">
                    Announcement: {announcementsItemsLength}
                </div>
            </div>
        </div>
    )
}

Tools.propTypes = {
    announcementsItemsLength: PropTypes.number,
    onSetTitleFast: PropTypes.func.isRequired
};
Tools.defaultProps = {
    announcementsItemsLength: 0,
}


export default Tools;


