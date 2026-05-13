import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * ProductCard - Componente Funcional para Exibição de Produtos
 * 
 * @param {Object} product - Dados do produto
 * @param {Function} onAddToCart - Callback quando adiciona ao carrinho
 * @returns {JSX} Cartão do produto
 */
function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Incrementa quantidade
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Decrementa quantidade (mínimo 1)
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Adiciona ao carrinho
  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      category: product.category
    });
    setQuantity(1); // Reset
  };

  // Alterna favorito
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.cardContainer}>
      {/* IMAGEM DO PRODUTO */}
      <View style={styles.imageContainer}>
        <Text style={styles.productImage}>{product.image}</Text>
        
        {/* BOTÃO FAVORITO */}
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={toggleFavorite}
        >
          <Text style={styles.heart}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* INFORMAÇÕES */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productCategory}>{product.category}</Text>
        
        {/* RATING */}
        <View style={styles.ratingContainer}>
          <Text style={styles.stars}>⭐ {product.rating}</Text>
          {product.calories && (
            <Text style={styles.calories}>{product.calories} kcal</Text>
          )}
        </View>

        {/* PREÇO */}
        <Text style={styles.productPrice}>
          R$ {product.price.toFixed(2)}
        </Text>
      </View>

      {/* CONTROLADOR DE QUANTIDADE */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity 
          style={styles.quantityButton}
          onPress={handleDecrement}
        >
          <Text style={styles.quantityButtonText}>−</Text>
        </TouchableOpacity>
        
        <Text style={styles.quantityText}>{quantity}</Text>
        
        <TouchableOpacity 
          style={styles.quantityButton}
          onPress={handleIncrement}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* BOTÃO ADICIONAR */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={handleAddToCart}
        activeOpacity={0.8}
      >
        <Text style={styles.addButtonText}>🛒 Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107'
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productImage: {
    fontSize: 60,
    textAlign: 'center'
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heart: {
    fontSize: 18,
    textAlign: 'center'
  },
  infoContainer: {
    marginBottom: 10
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4
  },
  productCategory: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 6
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    justifyContent: 'space-between'
  },
  stars: {
    fontSize: 12,
    color: '#666666'
  },
  calories: {
    fontSize: 11,
    color: '#FFC107',
    fontWeight: '600'
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFC107'
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10
  },
  quantityButton: {
    backgroundColor: '#FFC107',
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    minWidth: 30,
    textAlign: 'center'
  },
  addButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333'
  }
});

export default ProductCard;
