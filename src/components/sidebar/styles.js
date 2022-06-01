import styled from 'styled-components';

export const SidebarContainer = styled.div`
    width: 28%;
    height: 100%;
    min-width: 400px;
    background-color: #EBECF0;
    border: 1px solid #D9D9D9;
`

export const SideHeader = styled.div`
    width: 100%;
    background: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 21px 12px 93px;
`;

export const SideDropDown = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;

    p: {
        margin: 0;
        font-weight: 600;
        font-size: 20px;
        color: #000000;
    }
`;

export const SideBtn = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background: #096DD9;
    border: 1px solid #096DD9;
    border-radius: 2px;
    cursor: pointer;

    p {
        margin: 0;
        font-size: 16px;
        color: #FFFFFF;
        font-weight: 400;
    }
`;


export const SidebarPopupContainer = styled.div`
    width: 96%;
    margin: 6px 0;
    margin-left: 4%;
    background: #fff;
    border-radius: 4px;
    padding: 11px 20px 11px 16px;
`;

export const PopupInputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 6px 6px 6px 59px;
    background-color: #EFEFEF;
    border-radius: 8px;
    color: #7D7D7D;

    input {
        border: none;
        outline: none;
        background: inherit;
        width: calc(100% - 24px);
    }

    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`;

export const SideMain = styled.div`
    width: 100%;
    height: calc(100% - 64px);
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const Card = styled.div`
    width: 100%;
    padding: 12px 12px 12px 109px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .last-scene {
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        color: #595959;
        align-self: flex-start;
    }

    ${({ isActive }) => `
        background: ${isActive ? '#fff' : '#F9F9F9'};
    `}
`;

export const Thumbnail = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #246CC0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        font-weight: 500;
        font-size: 16px;
        color: #FEFEFE;
    }

    div {
        width: 16px;
        height: 16px;
        border: 2px solid #fff;
        background: #00E676;
        border-radius: 50%;
        position: absolute;
        bottom: -2px;
        right: -5px;
    }
`;

export const ChatContent = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    .user-details {
        display: flex;
        flex-direction: column;
        gap: 0px;

        p {
            margin: 0;
        }

        .name {
            font-weight: 400;
            font-size: 16px;
            color: #000000;
        }

        .message {
            font-weight: 400;
            font-size: 14px;
            color: #B5B5B5;
        }
    }

    ${({ padding }) => `
        padding: ${padding || 0};
    `}
`;