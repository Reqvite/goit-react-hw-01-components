import PropTypes from 'prop-types'
import { FriendList, FriendListItem, Status, Name } from './FriendsList.styled'

export const FriendsList = ({friends}) => {
    return (
        <FriendList>
    {friends.map(({avatar, name, isOnline, id}) =>  (
     <FriendListItem  key={id}>
         <Status >{isOnline}</Status>
           <img  src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
     </FriendListItem>
   ))}    
    </FriendList>
    )
}

FriendsList.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            status: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
    }))
}