import styled from "styled-components";

export const UnorderedList = styled.ul`
    padding: 0;
    list-style: none;
`;

export const ListItem = styled.li`
    display: flex;
    padding: 5px;
    vertical-align: middle;
    transition: all 0.3s ease;
    :hover {
        box-shadow: 1px 1px #53ea93, 2px 2px #53ea93, 3px 3px #53ea93,
            4px 4px #53ea93, 5px 5px #53ea93, 6px 6px #53ea93, 7px 7px #53ea93;
        transform: translateX(-7px);
    }
`;

export const ListItemImage = styled.img`
    position: relative;
    width: 350px;
    height: 110px;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 250px;
        height: 80px;
    }
`;

export const Title = styled.h1`
    padding: 0;
    margin: 0 auto;
    text-transform: uppercase;
    @media (max-width: 768px) {
        font-size: 0.99em;
    }
`;

export const SubTitle = styled.h2`
    margin: 5px auto;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 0.9em;
    }
`;

export const Label = styled.label`
    text-transform: uppercase;
    font-size: 12pt;
    letter-spacing: 0.05em;
    color: #2a293e;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding-left: 5px;
    margin-bottom: 24pt;
    line-height: 24pt;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    background: #f8f4e5;
    outline: none;
    transition: all 0.3s ease;
    :hover {
        border: 1px solid #6bd4b1;
    }
    :focus {
        border: 1px solid #6bd4b1;
    }
`;

export const DivBackground = styled.div`
    background: #f8f4e5;
    padding: 50px 100px;
    border-top: 10px solid #f45702;
`;

export const Button = styled.button`
    display: block;
    padding: 0.5em 1.5em;
    margin: 0 auto;
    cursor: pointer;
    border-color: transparent;
    color: #555;
    background-color: transparent;
    box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
    :hover {
        background-color: rgba(144, 144, 144, 0.075);
    }
`;
