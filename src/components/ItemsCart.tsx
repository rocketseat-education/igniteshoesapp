import { HeaderList } from './HeaderList';
import { FlatList, VStack, useToast } from 'native-base';

import { useCart } from '../hooks/useCart';

import { ItemCartCard } from './ItemCartCard';
import { Button } from '../components/Button';

export function ItemsCart() {
  const { cart, removeProductCart } = useCart();
  const toast = useToast();

  async function handleItemRemove(productId: string) {
    try {
      await removeProductCart(productId);

      toast.show({
        title: 'Produto removido',
        placement: 'top',
        bgColor: 'green.500'
      });

    } catch (error) {
      toast.show({
        title: 'Não foi possível remover o produto',
        placement: 'top',
        bgColor: 'reed.500'
      });
    }
  }

  return (
    <VStack flex={1}>
      <HeaderList title="Produtos" counter={cart.length} />

      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ItemCartCard
            data={item}
            onRemove={() => handleItemRemove(item.id)}
          />
        )}
        _contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        px={8}
        mt={2}
      />

      {
        cart.length > 0 &&
        <Button
          title="Finalizar compra"
          mx={8}
          my={3}
        />
      }
    </VStack>
  );
}