import { Button, Container, Drawer, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import { LESSONS, STATISTICS, STUDENTS } from "../../../Router/routes";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const NavigationPanel = () => {

    const [isMenuHide, setIsMenuHide] = useState(false);

    const [isHideMenuOpen, setIsHideMenuOpen] = useState(false);
    const openMenu = () => setIsHideMenuOpen(true);
    const closeMenu = () => setIsHideMenuOpen(false);

    return (
        <header className="" style={{ height: '80px', padding: '20px', boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.2)' }}>
            <Container maxWidth='lg'>
                <div className="flex justify-between" style={{ alignItems: 'center', fontFamily: 'Lexend Deca' }}>
                    <div className="flex justify-start">
                        <div className="header-logo flex" style={{ marginRight: '40px' }}>
                            <SchoolIcon color="warning" sx={{ marginRight: '10px' }} />
                            <Typography color='orangered' sx={{ fontSize: '20px', fontWeight: 500 }}>My Tutor</Typography>
                        </div>
                        <div className="flex justify-end">
                            <ul className={`flex justify-between ${isMenuHide ? 'menu' : 'menu'}`} >
                                <li><NavLink className="menu-item" to="/">Main</NavLink></li>
                                <li><NavLink className="menu-item" to={STUDENTS}>Students</NavLink></li>
                                <li><NavLink className="menu-item" to={LESSONS}>Lessons</NavLink></li>
                                <li><NavLink className="menu-item" to={STATISTICS}>Statistics</NavLink></li>
                                <li><NavLink className="menu-item" to={STATISTICS}>Tasks</NavLink></li>
                                <li><NavLink className="menu-item" to={STATISTICS}>About</NavLink></li>
                                {
                                    isMenuHide && <li><Link className="menu-item" to={STATISTICS}>Log in</Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="hide-button">
                        <Button sx={{ border: '2px solid ', borderRadius: '15px' }} variant='contained' color="warning">Log In</Button>
                    </div>
                </div>
            </Container>
            <div onClick={openMenu} className='menu_btn'>
                {isMenuHide ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <Drawer open={isHideMenuOpen} onClose={closeMenu} anchor="left" >
                <ul className={''} >
                    <li><NavLink className="menu-item" to="/">Main</NavLink></li>
                    <li><NavLink className="menu-item" to={STUDENTS}>Students</NavLink></li>
                    <li><NavLink className="menu-item" to={LESSONS}>Lessons</NavLink></li>
                    <li><NavLink className="menu-item" to={STATISTICS}>Statistics</NavLink></li>
                    <li><NavLink className="menu-item" to={STATISTICS}>Tasks</NavLink></li>
                    <li><NavLink className="menu-item" to={STATISTICS}>About</NavLink></li>
                    {
                        isMenuHide && <li><Link className="menu-item" to={STATISTICS}>Log in</Link></li>
                    }
                </ul>
            </Drawer>
        </header>
    );
};

export { NavigationPanel };
