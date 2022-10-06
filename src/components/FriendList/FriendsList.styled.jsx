import styled from "styled-components";

export const FriendList = styled.ul`
`

export const FriendListItem = styled.li`
display: flex;
align-items: center;
width: 300px;
margin-top: ${p => p.theme.space[4]}px;
padding: ${p => p.theme.space[4]}px;

background-color: ${p => p.theme.colors.friendsListBg};
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

&:not(:first-child){
    margin-top: ${p => p.theme.space[3]}px;
}
`
export const Status = styled.span`
margin-right: ${p => p.theme.space[2]}px;
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${p => p.children
    ? p.theme.colors.statusOnline
    : p.theme.colors.statusOffline
    }
`

export const Name = styled.p`
margin-left: ${p => p.theme.space[2]}px;
     color: ${p => p.theme.colors.mainTextColor};
    font-size: ${p => p.theme.fontSizes[3]}px;
`
