import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #F5F5F5;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    background: #fff;
    gap: 45px;
    padding: 0px 24px;

    a {
        text-decoration: none;
        color: #000;
        height: 100%;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        margin: 0;
        padding: 20.75px 0;
    }

    .active {
        font-weight: 600;
        border-bottom: 2px solid #096DD9;
    }
`;

export const ChatContainer = styled.div`
    margin: 0 auto;
    height: calc(100% - 63px);
`;

export const ChatsOverflow = styled.div`
    width: 77.21%;
    height: calc(100% - 109px);
    margin: 0 auto;
    overflow: auto;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Chats = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 122px;
    gap: 25px;
`;

export const ChatsFooter = styled.div`
    width: 68.64%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    input {
        padding: 16px 12px;
        font-weight: 400;
        font-size: 16px;
        color: #8C8C8C;
        border: 1px solid #D9D9D9;
        border-radius: 2px;
        background: #fff;
        outline: none;
    }

    .options {
        padding: 14px 14px 18.5px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left-toolbar {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        img {
            cursor: pointer;
        }
    }
`;

export const TodayDiv = styled.div`
    width: 100%;
    display: flex;
    padding: 44px 0;
    justify-self: flex-start;
    align-slef: flex-start;
    align-items: center;
    gap: 14px;

    .border {
        width: 46.68%;
        height: 1px;
        background: #D9D9D9;
    }

    .text {
        font-weight: 400;
        font-size: 14px;
        color: #262626;
    }
`;