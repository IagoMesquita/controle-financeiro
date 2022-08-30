import { IconType } from "react-icons";
import * as C from "./styles";

type Props = {
  title: string;
  Icon: IconType;
}

function ResumeItem({ title, Icon }: Props) {
  return (
    <C.Container>
      <C.HeaderCard>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon/>
      </C.HeaderCard>
      <C.Total>R$ 100,00</C.Total>
    </C.Container>
  );
}

export default ResumeItem;
