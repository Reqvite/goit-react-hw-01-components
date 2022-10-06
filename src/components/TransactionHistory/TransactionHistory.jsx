import PropTypes from 'prop-types';
import { Table, TableHeaderWrapper, TableHeader, TableItemsWrapper, TableItems } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
    <Table>
  <TableHeaderWrapper>
    <tr>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </tr>
  </TableHeaderWrapper>

    <tbody>
     {transactions.map(({ id, type, amount, currency }) => (
      <TableItemsWrapper key={id}>
      <TableItems>{type}</TableItems>
      <TableItems>{amount}</TableItems>
      <TableItems>{currency}</TableItems>
    </TableItemsWrapper>
  ))}
  </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.bool.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired
        }))
}

