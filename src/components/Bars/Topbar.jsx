import './Topbar.css'
import Rightbar from './Rightbar'
import { Container, Navbar, Popover, OverlayTrigger, Offcanvas, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';


function Topbar() {

    const clickRootClose = (
        <Popover>
            <Popover.Header as="h3">
                <Form>
                    <Form.Control type="text" placeholder="Search" />
                </Form>
            </Popover.Header>
        </Popover>
    );
    return (
        <div>
            <div className='topNavbar'>
                <Navbar fixed='top' bg="dark" variant='dark' expand='xs' className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#"><h5>Ketflix</h5></Navbar.Brand>
                        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={clickRootClose}>
                            <FontAwesomeIcon icon={faSearch} className='overlayIcon' />
                        </OverlayTrigger>
                        <FontAwesomeIcon icon={faBell} className='overlayBellIcon' />
                        <Navbar.Toggle style={{ marginTop: "10px" }} />
                        <Navbar.Offcanvas placement='end' className='text-bg-dark'>
                            <Offcanvas.Header closeButton closeVariant='white'>
                                <Offcanvas.Title>
                                    Categories
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Rightbar />
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Topbar
