import './CategoryBar.css'
import { Container, Badge, NavLink, Button } from 'react-bootstrap'

function CategoryBar() {
  return (
    <div className='categoryBar'>
       <Container>
                <Badge bg="dark">
                    <NavLink><span className='badgeText'> Trending</span></NavLink>
                </Badge>{' '}
                <Badge bg="dark">
                    <NavLink><span className='badgeText'>Newest</span></NavLink>
                </Badge>{' '}
                <Badge bg="dark">
                    <NavLink><span className='badgeText'>Popular</span></NavLink>
                </Badge>{' '}
                <Badge bg="dark">
                    <NavLink><span className='badgeText'>Stories</span></NavLink>
                </Badge>{' '}
                <Badge bg="dark">
                    <NavLink><span className='badgeText'>All Tags</span></NavLink>
                </Badge>{' '}
            </Container>
            <Container className='ketBtn'>
                <Button variant='dark' className='navBarBtn'>Action</Button>
                <Button variant='dark' className='navBarBtn'>Romantic</Button>
                <Button variant='dark' className='navBarBtn'>Horror</Button>
                <Button variant='dark' className='navBarBtn'>Animation</Button>
                <Button variant='dark' className='navBarBtn'>Series</Button>
                <Button variant='dark' className='navBarBtn'>Dramas</Button>
                <Button variant='dark' className='navBarBtn'>SciFi</Button>
                <Button variant='dark' className='navBarBtn'>Hindi</Button>
                <Button variant='dark' className='navBarBtn'>English</Button>
                <Button variant='dark' className='navBarBtn'>Pakistan</Button>
                <Button variant='dark' className='navBarBtn'>Punjabi</Button>
            </Container>
    </div>
  )
}

export default CategoryBar
