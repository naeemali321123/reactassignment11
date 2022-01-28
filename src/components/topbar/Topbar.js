// css
import './Topbar.css';
import { Button } from '@mui/material';
// image

function Topbar(props) {
    return (
        <div id="topbar">
            <div>
                <img src={props.logo} alt='logo' />
            </div>
            <div id='navbar'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Feature</li>
                    <li>Contact</li>
                    <li> <Button variant="outlined">Sign In</Button></li>
                    <li> <Button variant="contained">Sign up</Button></li>
                </ul>
            </div>
        </div>
    );
}

export default Topbar;
