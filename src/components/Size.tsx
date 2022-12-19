import { Pressable, IPressableProps, Text } from 'native-base';

type Props = IPressableProps & {
  size: string;
  isActive: boolean;
}

export function Size({ size, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={3}
      w={10}
      h={10}
      bg="gray.600"
      rounded="xs"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1
      }}
      {...rest}
    >
      <Text color={isActive ? "green.500" : "gray.200"} fontSize="xs">
        {size}
      </Text>
    </Pressable>
  );
}