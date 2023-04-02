import { NavLink,Button, Container } from 'react-bootstrap'
import './Rightbar.css'

function Rightbar() {
    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <ul className='rightbarList'>
                    <li className='rightbarListItem'>
                        <NavLink active>Hollywood</NavLink>
                    </li>
                    <li className='rightbarListItem'>
                        <NavLink active>Bollywood</NavLink>
                    </li>
                    <li className='rightbarListItem'>
                        <NavLink active>Kollywood</NavLink>
                    </li>
                    <li className='rightbarListItem'>
                        <NavLink active>Lollywood</NavLink>
                    </li>
                </ul>
                <hr />
                <NavLink><h6>FAQ & Contact</h6></NavLink>
                <hr />
                <NavLink><h6>Privacy</h6></NavLink>
                <hr />
                <NavLink><h6>Terms</h6></NavLink>
                <hr />
                <NavLink><h6>Manage Consent</h6></NavLink>
                <hr /><br/><br/><br/>
                <Container><Button variant="outline-light" size='sm' className='rightbarButton'>Show More</Button></Container>

            </div>
        </div>
    )
}

export default Rightbar
