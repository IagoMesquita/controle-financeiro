import styled from "styled-components";

type Props = { alignCenter?: string }

export const Tr = styled.tr``

export const Td = styled.td`
    padding-top: 15px;
    padding-right: 30px;
    text-align: ${(props: Props) => props.alignCenter ? 'center' : 'start'};
    word-break: keep-all; //para evitar que as palavras sejam quebradas em locais inadequados

    svg {
        width: 18px;
        height: 18px;
    }
`