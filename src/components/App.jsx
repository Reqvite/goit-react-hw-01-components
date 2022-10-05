import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';

import user from 'data/user.json'
import { Container } from './Container/Container';
import { ProfileBox } from './Profile/ProfileBox/ProfileBox';
import { ProfileData } from './Profile/ProfileData/ProfileData';

export const { username, tag, location, avatar, stats: { followers, views, likes } } = user;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container display="flex" justifyContent="center" padding="3">
    <ProfileBox bg='profileBg' width='profileCardWidth' textAlign="center" boxShadow="profileShadow">
        <ProfileData
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes} />
        </ProfileBox>
        </Container>
  </ThemeProvider>
  )
};

  
  
  /* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div> */