import React,{useState} from 'react';
import  "./index.css"
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    const handleNavigate=() =>  {
        navigate('/login');

    }
    return (
        <div>
        <nav className="lg:flex justify-between items-center mb-8 pt-6 bg-white hidden">
            <div className="font-extrabold text-3xl">Nodium</div>

                <div>
                    <ul className="flex gap-x-10 text-2xl">
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">English</a></li>
                        <li><a href="/signup">SignUp</a></li>
                        <li><a href="#">BecomeAJobProvider</a></li>
                    </ul>
                </div>

                <div>
                    <button
                        className="join-button"
                        onClick={handleNavigate}
                    >LogIn</button>
                </div>




        </nav>
            <nav className={`flex justify-between items-center lg:hidden px-6`}>
                <div className="font-extrabold text-3xl">Nodium</div>
                <div className=''>
                    <IconButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon  style={{fontSize: "2.6rem"}}/>
                    </IconButton>

                    <div>
                        <Menu

                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >

                            <div className={`text-2xl w-96 h-80 rounded-3xl`}>
                                <MenuItem style={{fontSize: "2.0rem"}} onClick={handleClose}>Explore</MenuItem>
                                <MenuItem style={{fontSize: "2.0rem"}} onClick={handleClose}>English</MenuItem>
                                <MenuItem style={{fontSize: "2.0rem"}} onClick={handleClose}>SignUp</MenuItem>
                                <MenuItem style={{fontSize: "2.0rem"}}
                                          onClick={handleClose}>BecomeAJobProvider</MenuItem>
                                <div>
                                    <button className="join-button text-2xl ml-6">LogIn</button>

                                </div>
                            </div>
                        </Menu>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;