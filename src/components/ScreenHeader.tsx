import { useNavigation } from '@react-navigation/native';
import { Box, Heading, HStack, Icon } from 'native-base';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  title: string;
}

export function ScreenHeader({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <HStack bg="gray.600" pb={6} pt={16} justifyContent="space-between" px={6}>
      <Pressable onPress={goBack}>
        <Icon as={Feather} name="arrow-left" size={6} color="green.500" />
      </Pressable>


      <Heading color="gray.100" fontSize="xl">
        {title}
      </Heading>

      <Box w={6} h={6} />
    </HStack>
  );
}