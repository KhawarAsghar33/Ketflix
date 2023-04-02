import './SubscriptionPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

function SubscriptionPage() {
    return (
        <div className='mainContainer'>
            <div className='mainIcons'>
                <FontAwesomeIcon icon={faCirclePlay} className='folderIcon' />
            </div>
            <div className='mainText'>
                <h4>Don't miss new videos</h4>
                <p>Sign in to see updates from your<br/>favourite YouTube channels</p>
            </div>
            <div className='BtnContainer'>
                <Button variant='primary'>SIGN IN</Button>
            </div>
        </div>
    )
}

export default SubscriptionPage
