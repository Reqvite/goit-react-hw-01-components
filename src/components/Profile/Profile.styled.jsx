import styled from "styled-components";


export const Profile = styled.div`
    background-color: ${p => p.theme.colors.profileItemsBg};
    width: ${p => p.theme.sizes.boxWidth};
    text-align: center;
    box-shadow: ${p => p.theme.shadows.profileShadow};
`
export const Description = styled.div`
 padding: ${p => p.theme.space[3]}px;
`

export const Avatar = styled.img`
   margin-left: auto;
   margin-right: auto;
`
export const Name = styled.p`
    color: ${p => p.theme.colors.primaryTextColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[4]}px;
    margin-top: ${p => p.theme.space[3]}px;
`

export const Tag = styled.p`
    color: ${p => p.theme.colors.secondaryTextColor};
    font-size: ${p => p.theme.fontSizes[3]}px;
    margin-top: ${p => p.theme.space[2]}px;
   
`
export const Location = Tag;

export const Stats = styled.ul`
    display: flex;
    margin-top: ${p => p.theme.space[2]}px;
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: ${p => p.theme.space[3]}px;
    width: 33.33333%;

    background-color: ${p => p.theme.colors.profileItemsBg};
    border: ${p => p.theme.borders.profileItemsBorder};
    
`

export const Label = styled(Tag)`
font-size: ${p => p.theme.fontSizes[2]}px;
margin-top: 0;
`

export const Quantity = styled(Label)`
color: ${p => p.theme.colors.primaryTextColor};
font-size: ${p => p.theme.fontSizes[4]}px;
font-weight: ${p => p.theme.fontWeights.bold};
margin-top: ${p => p.theme.space[3]}px;
`