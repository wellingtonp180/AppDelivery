import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Alert } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  const burgerData = {
    id: 1,
    name: "Beef Burger",
    calories: 70,
    price: 12.00,
    imageUri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
  };

  const handleCartAction = (item) => {
    Alert.alert("Sucesso", `${item.quantity}x ${item.name} no carrinho!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Foodi Express</Text>
      </View>
      <ProductCard product={burgerData} onAddToCart={handleCartAction} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  header: { padding: 20, paddingTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold' }
});
