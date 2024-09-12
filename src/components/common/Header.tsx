import { Box, IconButton } from '@mui/material';
import Icon from './Icon';
import { HeaderContainer, IconWrapper, LogoWrapper } from './styles/layout';

type HeaderProps = {
  openDrawer: () => void;
};

const Header = ({ openDrawer }: HeaderProps) => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
          sx={{ p: 0, display: { sm: 'none' } }}
        >
          <Icon name="menu" fontSize="small" />
        </IconButton>
        <div>{'logo'}</div>
      </LogoWrapper>

      <IconWrapper>
        <IconButton>
          <Icon name="add" fontSize="small" />
        </IconButton>
        <IconButton>
          <Icon name="notification" fontSize="small" />
        </IconButton>
      </IconWrapper>
    </HeaderContainer>
  );
};

export default Header;
