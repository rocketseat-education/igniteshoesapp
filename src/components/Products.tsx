import { useNavigation } from '@react-navigation/native';
import { FlatList, VStack } from 'native-base';
import { HeaderList } from './HeaderList';

import { ProductCard, ProductCardProps } from './ProductCard';
import {PRODUCTS} from '../data/products';

type Props = {
  brand: string;
  data: ProductCardProps[];
}

export function Products({ data, brand }: Props) {
  const { navigate } = useNavigation();

  return (
    <VStack flex={1}>
      <HeaderList title={brand} counter={PRODUCTS.length} />

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
                <ProductCard 
                  data={item}
                  onPress={() => navigate('details', { productId: item.id })} 
                />
              )}
        numColumns={2}
        _contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}