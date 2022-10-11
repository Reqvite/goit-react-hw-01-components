import PropTypes from 'prop-types'
import { Profile, Description, Name, Tag, Location, Stats, StatsItem, Avatar, Label, Quantity } from './Profile.styled'
export const ProfileData = ({ username, tag, location, avatar, followers,views,likes}) => {
    return (
   <Profile>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
        width="200"
    />
    <Name >{username}</Name>
    <Tag >{tag}</Tag>
    <Location >{location}</Location>
  </Description>
  <Stats>
    <StatsItem>
      <Label as="span">Followers</Label>
    <Quantity as="span">{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label as="span">Views</Label>
      <Quantity as="span">{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label as="span">Likes</Label>
     <Quantity as="span">{likes}</Quantity>
    </StatsItem>
        </Stats>
        </Profile>
    )
}

ProfileData.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,

}
