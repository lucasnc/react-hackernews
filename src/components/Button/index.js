import styled from 'styled-components';

const Button = styled.button`
    padding: 1rem 2rem;
    width: 260px;
    height: 50px;
    background: #fc6723;
    border-radius: 8px;
    color: var(--color-text);
    font-size: 1.2rem;
    font-weight: bold;
    border: 0;
    margin: 2rem auto;
    transition: background-color 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Button;