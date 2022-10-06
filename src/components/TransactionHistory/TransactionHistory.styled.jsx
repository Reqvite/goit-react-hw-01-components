import styled from "styled-components";

export const Table = styled.table`
margin-top: ${p => p.theme.space[4]}px;
    max-width: 800px;
   background-color: white ;
   text-align: center;
`

export const TableHeaderWrapper = styled.thead`
    background-color: #3a3539;
`
export const TableHeader = styled.th`
width: 500px;
  color: white;
    font-size: ${p => p.theme.fontSizes[4]}px;
`
export const TableItems = styled.td`
padding: ${p => p.theme.space[2]}px;
    color: ${p => p.theme.colors.secondaryTextColor};
    font-size: ${p => p.theme.fontSizes[3]}px;

`
export const TableItemsWrapper = styled.tr`
     &:nth-child(2n){
    background-color: #f0e5e5;
    }
`
