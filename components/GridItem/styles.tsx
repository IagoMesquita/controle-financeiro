import styled from "styled-components";

type Props = { alignCenter?: string }

export const Tr = styled.tr``

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props: Props) => props.alignCenter ? 'center' : 'start'};
    word-break: break-all;

    svg {
        width: 18px;
        height: 18px;
    }
`