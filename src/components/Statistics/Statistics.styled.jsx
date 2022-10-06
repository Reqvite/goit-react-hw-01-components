import styled from "styled-components";

export const Section = styled.section`
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[3]}px;
`

export const Title = styled.h2`
text-align: center;
color: ${p => p.theme.colors.primaryTextColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[5]}px;

`

export const StatsList = styled.ul`
display: grid;
grid-template-columns: auto auto;
margin-top: ${p => p.theme.space[4]}px; 

  @media(min-width: 630px){
    grid-template-columns: auto auto auto auto auto;
  }
`


export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
padding: ${p => p.theme.space[4]}px;

    background-color: ${p => p.theme.colors.statsBg};

  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`

export const Label = styled.span`
     color: white;
    font-size: ${p => p.theme.fontSizes[3]}px;
`

export const Percentage = styled(Label)`
 margin-top: ${p => p.theme.space[2]}px; 
`
