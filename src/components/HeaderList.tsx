import { Heading, HStack, Text } from 'native-base';

type Props = {
  title: string;
  counter: number;
}

export function HeaderList({ title, counter }: Props) {
  return (
    <HStack w="full" justifyContent="space-between" alignItems="center" px={8} mt={6}>
      <Heading fontFamily="heading" color="gray.200" fontSize="md">
        {title}
      </Heading>

      <Text color="gray.200" fontSize="sm">
        {counter}
      </Text>
    </HStack>
  );
}