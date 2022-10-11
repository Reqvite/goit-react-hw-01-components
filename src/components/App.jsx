import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';

import user from 'data/user.json';
import data from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json'

import { Container } from './Container/Container';
import { ProfileData } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

const { username, tag, location, avatar, stats: { followers, views, likes } } = user;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <ProfileData
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes} />
          <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        <FriendsList friends={friends} />
        <TransactionHistory transactions={transactions}/>
        </Container>
  </ThemeProvider>
  )
};