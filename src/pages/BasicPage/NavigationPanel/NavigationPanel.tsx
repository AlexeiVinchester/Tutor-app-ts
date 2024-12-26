import { Button, Container } from '@mui/material';
import { NavigationDrawer } from './NavigationDrawer/NavigationDrawer';
import { NavigationMenuItems } from './NavigationMenuItems/NavigationMenuItems';
import { NavigationDrawerOpenButton } from './NavigationDrawerOpenButton/NavigationDrawerOpenButton';
import { Logotype } from '../../../components/Logotype/Logotype';
import { useDrawer } from '../../../hooks/useDrawer';

const NavigationPanel = () => {
  const {
    isOpen: isHideMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  return (
    <header
      className=""
      style={{
        height: '80px',
        padding: '20px',
        boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.2)',
        minWidth: '',
      }}
    >
      <Container maxWidth="lg">
        <div
          className="flex justify-between"
          style={{ alignItems: 'center', fontFamily: 'Lexend Deca' }}
        >
          <div className="flex">
            <Logotype />
            <NavigationMenuItems />
          </div>
          <div className="log-in-button">
            <Button
              sx={{
                borderRadius: '15px',
                bgcolor: 'rgb(255, 92, 53)',
                ':hover': {
                  bgcolor: 'rgb(80, 201, 173)',
                },
              }}
              variant="contained"
            >
              Log In
            </Button>
          </div>
          <NavigationDrawerOpenButton onOpen={openMenu} />
        </div>
      </Container>
      <NavigationDrawer isOpen={isHideMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export { NavigationPanel };
