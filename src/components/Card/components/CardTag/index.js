import styled from 'styled-components';

const CardTag = styled.span`
    font-size: 20px;
    margin: 2rem 0;
    padding: .125rem .75rem;
    border-radius: 9999px;
    color: ${props => props.type === 'job' ? '#feecdc': '#8a2c0d'};
    background-color: ${props => props.type === 'job' ? '#8a2c0d' : '#feecdc'};
`;

export default CardTag;