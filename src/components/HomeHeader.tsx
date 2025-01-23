import { Feather } from '@expo/vector-icons';
import { Heading, HStack, Icon, Text, VStack, Avatar } from "native-base";

import userPhotoDefault from "../assets/userPhotoDefault.png";

export function HomeHeader() {
  return (
    <HStack pt={16} pb={5} px={8} bg="gray.600" alignItems="center">
      <Avatar
        source={userPhotoDefault}
        size={16}
        mr={4}
        borderWidth={2}
        borderColor="gray.400"
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Rodrigo Gonçalves
        </Heading>
      </VStack>

      <Icon
        as={Feather}
        name="log-out"
        color="gray.200"
        size={7}
      />
    </HStack>
  );
}