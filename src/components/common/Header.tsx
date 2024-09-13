import { IconButton } from '@mui/material';
import Icon from './Icon';
import { HeaderContainer, IconWrapper, LogoWrapper } from './styles/layout';
import { useRouter } from 'next/router';

type HeaderProps = {
  openDrawer: () => void;
};

const Header = ({ openDrawer }: HeaderProps) => {
  const router = useRouter();

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
        <div>{'모두의 챌린지'}</div>
      </LogoWrapper>

      <IconWrapper>
        <IconButton onClick={() => router.push('/challenge/create')}>
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
