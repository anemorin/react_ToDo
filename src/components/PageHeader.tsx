import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  font-size: 24px;
`

const PageHeader: React.FC = () => {
  return (
    <HeaderContainer>
      Список задач
    </HeaderContainer>
  )
}

export default PageHeader;