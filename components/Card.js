import styled from "styled-components";
import { Card, Image, type RebassProps } from "rebass";
import { H3 } from "./Heading";
import Text from "./Text";
import BoxShadow from "./BoxShadow";

const Title = styled(props => (
  <H3 pl={[3, 4]} pr={[3, 4]} pt={[3, 4]} my={0} lineHeight={1} {...props} />
))``;

const BaseCard = styled(Card)`
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};

  &:hover {
    ${Title} {
      text-decoration: underline;
    }
  }
`;

const C = (props: RebassProps) => (
  <BoxShadow borderRadius="5px">
    <BaseCard {...props} />
  </BoxShadow>
);

C.Title = Title;
C.Body = props => (
  <Text
    color="#666"
    fontSize={2}
    lineHeight={1.25}
    px={[3, 4]}
    mb={[3, 4]}
    mt={2}
    {...props}
  />
);
C.Image = props => (
  <Image {...props} css={{ borderRadius: "5px 5px 0 0", ...props.css }} />
);
C.FinePrint = props => (
  <Text
    color="#666"
    pb={[3, 4]}
    pl={[3, 4]}
    pr={[3, 4]}
    fontSize={1}
    {...props}
  />
);

export default C;
