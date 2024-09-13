import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Drawer, ListContainer, ListSubheader } from './styles/layout';
import Icon from './Icon';

type MenuItem = {
  label: string;
  link: string;
  icon: string;
};

type MenuList = {
  subHeader: string;
  items: MenuItem[];
};

// TODO: 많아지면 파일 분리하기, icon을 subHeader로 옮길지 결정하기
const menuList: MenuList[] = [
  {
    subHeader: '홈',
    items: [{ label: '홈', link: '/', icon: 'home' }],
  },
  {
    subHeader: '챌린지',
    items: [
      { label: '챌린지1', link: '/challenge1', icon: 'calendar' },
      { label: '챌린지2', link: '/challenge2', icon: 'done' },
    ],
  },
  {
    subHeader: 'Q&A',
    items: [{ label: 'QnA', link: '/questions', icon: 'qna' }],
  },
];

type SidebarProps = {
  isOpen: boolean;
  closeDrawer: () => void;
};

const Sidebar = ({ isOpen, closeDrawer }: SidebarProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box gridArea={'sidebar'} component={'nav'} id="Sidebar">
      <Drawer
        anchor="left"
        open={isOpen}
        variant={isDesktop ? 'permanent' : 'temporary'}
        onClose={closeDrawer}
      >
        <ListContainer>
          {isDesktop && <ListItem>{'logo'}</ListItem>}
          {menuList.map((menu) => (
            <ListContainer key={`menu-${menu.subHeader}`} sx={{ p: 0 }}>
              <ListSubheader>{menu.subHeader}</ListSubheader>
              {menu.items.map((item) => (
                <ListItemButton key={item.label} sx={{ gap: 1 }}>
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <Icon name={item.icon} fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={item.label} sx={{ m: 0, '> span': { fontSize: 14 } }} />
                </ListItemButton>
              ))}
            </ListContainer>
          ))}
        </ListContainer>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
