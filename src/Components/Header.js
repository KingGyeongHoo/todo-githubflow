import styled from 'styled-components'

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const HeaderSpan = styled.span`
    font-size: 50px;
    color: #5882FA;
    font-weight: bold;
`
export default function Header() {
    return (
        <>
        <HeaderDiv>
            <HeaderSpan>KingGyeongHoo's TODO LIST</HeaderSpan>
        </HeaderDiv>
        </>
    )
}