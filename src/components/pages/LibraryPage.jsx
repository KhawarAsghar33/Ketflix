import './LibraryPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

function LibraryPage() {
  return (
    <div className='mainContainer'>
      <div className='mainIcons'>
        <FontAwesomeIcon icon={faFolder} className='folderIcon' />
      </div>
      <div className='mainText'>
        <h4>Enjoy your favourite videos</h4>
        <p>Sign in access videos that you've liked<br/>or saved</p>
      </div>
      <div className='BtnContainer'>
        <Button variant='primary'>SIGN IN</Button>
      </div>
    </div>
  )
}

export default LibraryPage
