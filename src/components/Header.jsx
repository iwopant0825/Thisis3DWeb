import styled from "styled-components";
import Logo from '/Logo.svg'
export default function OverHeader({scrollTest}) {
  return (
    <>
      <HeaderLayout>
        <HeaderBox>
          <img src={Logo}/>
          <HeaderList>
            <HeaderConText on={true}/>
            <HeaderConText on={false}/>
            <HeaderConText on={false}/>
          </HeaderList>
        </HeaderBox>
      </HeaderLayout>
    </>
  );
}

const HeaderLayout = styled.div`
  width: 100%;
  padding: 26px 130px;
  display: flex;
  position: fixed;
  z-index: 999;
  align-items:center;
  justify-content:center;
`;

const HeaderBox = styled.div`
  display: flex;
  width: 610px;
  height: 73px;
  padding: 12px 15px;
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  background-color:white;
`
const HeaderList = styled.div`
  display: flex;
  width: 450px;
  justify-content: space-between;
`
const HeaderConText = styled.div`
  display: flex;
  border-radius: 100px;
  width: 140px;
  height: 51px;
  background: ${props => props.on ? '#262626' : '#B8B8B8'};
`