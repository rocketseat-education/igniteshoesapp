import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      flex={1}
      minH={14}
      maxH={14}
      bg="green.700"
      borderWidth={0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Text
        color="white"
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase >
  );
}