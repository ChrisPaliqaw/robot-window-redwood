import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link as RwLink, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import Footer from 'src/components/Footer/Footer'

type RobotWindowLayoutProps = {
  children?: React.ReactNode
}

export default function RobotWindowLayout({ children }: RobotWindowLayoutProps) {
  const links = [
    { name: 'Home', to: routes.home() },
    { name: 'Tasks', to: routes.tasks() },
    { name: 'Settings', to: routes.settings() },
  ]

  const { logOut } = useAuth()

  const theme = createTheme();

  const title = 'Robot Window'

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              {title}
            </Typography>
            <Button variant="outlined" size="small" onClick={logOut}>
              Sign out
            </Button>
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
          >
            {links.map((link) => (
              <Link
                color="inherit"
                noWrap
                variant="body2"
                key={link.name}
                component={RwLink}
                to={link.to}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {link.name}
              </Link>
            ))}
          </Toolbar>
          <main>{children}</main>
        </Container>
        <Footer description='Connect to your robot' title={title} />
      </ThemeProvider>
    </>
  );
}
