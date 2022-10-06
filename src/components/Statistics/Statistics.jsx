import PropTypes from 'prop-types';
import { Section, Title, StatsList, StatsItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
    return (
<Section >
     {title && <Title>{title}</Title>}
    <StatsList>
   {stats.map(({id, label, percentage}) => (
     <StatsItem key={id} style={{backgroundColor:getRandomHexColor()}}>
           <Label >{label}</Label>
           <Percentage >{percentage}%</Percentage>
       </StatsItem>
      ))}             
  </StatsList>
</Section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function getRandomHexColor() {
  const colors = ['#DC7633 ', '#5DADE2', '#EC7063','#52BE80 ', '#C39BD3' ];
  return  colors[Math.floor(Math.random() * colors.length)];
}

