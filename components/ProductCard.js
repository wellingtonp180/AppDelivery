import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    setQuantity(1);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.imageUri }} style={styles.image} />
        <TouchableOpacity style={styles.favorite} onPress={() => setIsFavorite(!isFavorite)}>
          <Text style={styles.favIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.calories}>🔥 {product.calories} Calories</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.counter}>
          <TouchableOpacity onPress={handleDecrement}><Text style={styles.btnText}> − </Text></TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncrement}><Text style={styles.btnText}> + </Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addText}>🛒 Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFF', borderRadius: 20, padding: 15, margin: 10, elevation: 3 },
  imageContainer: { alignItems: 'center', marginBottom: 10 },
  image: { width: 120, height: 120, resizeMode: 'contain' },
  favorite: { position: 'absolute', right: 0, top: 0, padding: 5 },
  favIcon: { fontSize: 22 },
  info: { marginBottom: 10 },
  name: { fontSize: 20, fontWeight: 'bold' },
  calories: { color: '#888', marginVertical: 4 },
  price: { fontSize: 22, fontWeight: 'bold', color: '#FFB800' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  counter: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 5 },
  btnText: { fontSize: 22, paddingHorizontal: 12 },
  quantityText: { fontSize: 18, fontWeight: '600' },
  addButton: { backgroundColor: '#FFB800', padding: 12, borderRadius: 12 },
  addText: { color: '#FFF', fontWeight: 'bold' }
});

export default ProductCard;
