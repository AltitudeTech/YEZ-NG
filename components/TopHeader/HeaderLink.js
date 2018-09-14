import Link from "next/link";
import styled from 'styled-components';
import S_Link from '../styled/S_Link'


const S_HeaderLink = styled(S_Link)`
  color: #fff;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  padding: 0px 6px;
`


export default ({text="", href=""}) => (
  <Link href={href} passHref>
    <S_HeaderLink>{text}</S_HeaderLink>
  </Link>
)