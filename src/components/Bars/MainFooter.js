import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VideoLibraryRounded } from '@mui/icons-material';
import { SubscriptionsTwoTone } from '@mui/icons-material';
import { HomeRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function MainFooter() {

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <BottomNavigation sx={{ width: '100%', position: 'fixed', bottom: 0, backgroundColor: 'black', zIndex: 100 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    LinkComponent={Link}
                    to="/"
                    style={{ color: 'white' }}
                    label="Home"
                    value="Home"
                    icon={<HomeRounded />}
                />
                <BottomNavigationAction
                    style={{ color: 'white' }}
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    LinkComponent={Link}
                    to="/SubscriptionPage"
                    style={{ color: 'white' }}
                    label="Subscriptions"
                    value="Subscriptions"
                    icon={<SubscriptionsTwoTone />}
                />
                <BottomNavigationAction
                    LinkComponent={Link}
                    to="/libraryPage"
                    style={{ color: 'white' }}
                    label="Library"
                    value="Library"
                    icon={<VideoLibraryRounded />} />

            </BottomNavigation>
        </div>
    )
}

export default MainFooter
