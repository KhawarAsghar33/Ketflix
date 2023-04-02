import './Footbar.css'
import { Button, Container, ButtonToolbar, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footbar() {
  return (
    <div>
      <Container className='BtnToolbar'>
        <ButtonToolbar aria-label="Toolbar with Button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button variant="dark"><Link to="/" className='nav-link'>1</Link></Button>{' '}
            <Button variant="dark"><Link to="/poster2" className='nav-link'>2</Link></Button>{' '}
            <Button variant="dark"><Link to="/poster3" className='nav-link'>3</Link></Button>{' '}
            <Button variant="dark"><Link to="/poster4" className='nav-link'>4</Link></Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Container>
    </div>
  )
}

export default Footbar
