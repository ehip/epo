import { Container, Typography } from '@material-ui/core'
import { Text } from '../Text'

interface Props {
    title: string,
    text: string
}

export const TextField = ({ title, text }: Props) => {
    return (
        <Container>
            <Typography variant="h3">{title}</Typography>
            <Text text={text} />
        </Container>
    )
}