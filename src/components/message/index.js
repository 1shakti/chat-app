import { Container, MessageBox, Time, Text, Tool } from "./styles"
export default function Message({ children }) {
    return (
        <Container>
            <MessageBox>
                {children}
            </MessageBox>
            <img src='/assets/icons/Icon.svg' alt='tick' />
    </Container>
    )
}



Message.Time = function MessageTime({ children, ...props }) {
    return (
    <Time {...props}>
        <span>{children}</span>
        <img src='/assets/icons/Starred.svg' alt='start' />
    </Time>
    )
}

Message.Text = function MessageText({ children }) {
    return <Text>{children}</Text>
}

Message.Tool = function MessageTool({ children, ...props }) {
    return <Tool {...props}>{children}</Tool>
}