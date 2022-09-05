import { IconType } from "react-icons";
import * as C from "./styles";

type Props = {
  title: string;
  Icon: IconType;
  value: number;
}


function ResumeItem({ title, Icon, value }: Props) {
  return (
    <C.Container>
      <C.HeaderCard>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon/>
      </C.HeaderCard>
      <C.Total>{ `R$ ${value}` }</C.Total>
    </C.Container>
  );
}

export default ResumeItem;
