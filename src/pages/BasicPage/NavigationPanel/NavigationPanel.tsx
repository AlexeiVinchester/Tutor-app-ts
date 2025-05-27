import { Button, Container } from '@mui/material';
import { NavigationMenuItems } from './NavigationMenuItems/NavigationMenuItems';
import { Logotype } from '../../../shared/ui/Logotype/Logotype';

const NavigationPanel = () => {

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
        </div>
      </Container>
    </header>
  );
};

export { NavigationPanel };
