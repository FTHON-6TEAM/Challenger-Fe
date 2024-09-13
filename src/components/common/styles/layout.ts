import {
  Container as MuiContainer,
  List,
  Drawer as MuiDrawer,
  ListSubheader as MuiListSubheader,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const SIDEBAR_WIDTH = {
  MOBILE: 200,
  DESKTOP: 240,
};

export const HEADER_HEIGHT = 45;

/* ------ main layout ------ */
const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: `
  'header'
  'main'
`,
  gridTemplateColumns: '100vw',
  gridTemplateRows: `${HEADER_HEIGHT}px calc(100vh - ${HEADER_HEIGHT}px)`,

  [theme.breakpoints.up('sm')]: {
    gridTemplateAreas: `
    'header header'
    'sidebar main'
    `,

    gridTemplateColumns: `${SIDEBAR_WIDTH.DESKTOP}px calc(100vw - ${SIDEBAR_WIDTH.DESKTOP}px)`,
  },
}));

const MainContainer = styled(MuiContainer)(({ theme }) => ({
  gridArea: 'main',
  minWidth: '100%',
  minHeight: '100vh',
  paddingTop: '8px',
  paddingBottom: '16px',
  paddingX: '8px',

  [theme.breakpoints.up('sm')]: {
    paddingX: 0,
    overflow: 'overlay',
    paddingTop: '32px',
  },
}));

/* ------ header ------ */
const HeaderContainer = styled('header')(({ theme }) => ({
  gridArea: 'header',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  backgroundColor: 'white',
  height: HEADER_HEIGHT,

  [theme.breakpoints.up('sm')]: {
    paddingLeft: SIDEBAR_WIDTH.DESKTOP + 16,
  },
}));

const LogoWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
}));

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,

  '> button': {
    padding: 0,
  },
}));

/* ------ sidebar ------ */
const Drawer = styled(MuiDrawer)(({ theme }) => ({
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  backgroundColor: 'white',
  width: SIDEBAR_WIDTH.MOBILE,
  flexShrink: 0,
  zIndex: theme.zIndex.drawer + 1,

  [`& .MuiDrawer-paper`]: {
    width: SIDEBAR_WIDTH.MOBILE,
    boxSizing: 'border-box',
  },

  [theme.breakpoints.up('sm')]: {
    width: SIDEBAR_WIDTH.DESKTOP,

    [`& .MuiDrawer-paper`]: {
      width: SIDEBAR_WIDTH.DESKTOP,
    },
  },
}));

const ListContainer = styled(List)(() => ({
  width: '100%',
  overflow: 'auto',
  '&.MuiList-root': {
    padding: 0,
  },
}));

const ListSubheader = styled(MuiListSubheader)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontSize: 13,
  fontWeight: 500,
}));

export {
  Container,
  MainContainer,
  HeaderContainer,
  LogoWrapper,
  IconWrapper,
  Drawer,
  ListContainer,
  ListSubheader,
};
