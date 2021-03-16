import { Text } from "../../components/Text";

export default {
  title: "Components/Text",
  component: Text,
};

const textProp = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum sagittis erat in interdum. Praesent et metus ac augue hendrerit laoreet. Nulla facilisi. Suspendisse sit amet faucibus arcu. Mauris faucibus vestibulum ligula nec tincidunt. Nunc sit amet leo luctus, dignissim ipsum quis, fermentum urna. Nulla sit amet ipsum ultrices, condimentum nibh id, porttitor purus. Etiam nunc lectus, tristique fermentum aliquam eget, aliquam vitae elit. Morbi in mi ut tellus viverra auctor nec in augue. Nullam malesuada, ligula sed blandit finibus, ex tortor aliquam urna, sed iaculis justo mi sed eros.`

export const APICall = () => <Text text={textProp} />;
