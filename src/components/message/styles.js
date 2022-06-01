import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    algin-items: flex-end;
    gap: 28px;
`;

export const MessageBox = styled.div`
    padding: 8px 16px;
    min-width: 130px;
    background: #E6F7FF;
    border-radius: 6px 6px 0px 6px;
    position: relative;

    .tool {
        display: none;
    }

    &:hover, .tool:hover {
        .tool {
            display: flex;
        }
    }
`;

export const Time =styled.p`
    width: 100%;
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        display: none;
    }

    ${({ isStarred }) => `
        img {
            display: ${isStarred ? 'block' : 'none'};
        }
    `}
`;

export const Text = styled.p`
    margin: 0;
    margin-top: 5px;
    max-width: 300px;
    word-break: break-word;
    font-weight: 400;
    font-size: 16px;
    color: #262626;
`;

export const Tool = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 8px 16px;
    top: -40px;
    right: 0;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
    border-radius: 2px;

    img {
        cursor: pointer;
    }
`;