import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BorderRadius, Spacing } from '@/constants/design-system';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

// Örnek görseller - gerçek uygulamada API'den gelecek
const sampleItems = [
  {
    id: 1,
    title: 'Elektronik Eşya',
    price: '500 TL',
    image: require('@/assets/images/react-logo.png'),
  },
  {
    id: 2,
    title: 'Mobilya',
    price: '1200 TL',
    image: require('@/assets/images/icon.png'),
  },
  {
    id: 3,
    title: 'Giyim',
    price: '250 TL',
    image: require('@/assets/images/partial-react-logo.png'),
  },
  {
    id: 4,
    title: 'Kitap',
    price: '75 TL',
    image: require('@/assets/images/react-logo@2x.png'),
  },
  {
    id: 5,
    title: 'Oyuncak',
    price: '150 TL',
    image: require('@/assets/images/react-logo@3x.png'),
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.headerTitle}>
            Takas Uygulaması
          </ThemedText>
          <ThemedText style={styles.headerSubtitle}>
            Öne çıkan ürünler
          </ThemedText>
        </ThemedView>

        {/* Image Grid */}
        <View style={styles.imageGrid}>
          {sampleItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.imageCard,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                },
              ]}
              activeOpacity={0.8}>
              <View style={styles.imageContainer}>
                <Image
                  source={item.image}
                  style={styles.image}
                  contentFit="cover"
                />
                <View style={[styles.overlay, { backgroundColor: colors.primary + '10' }]} />
              </View>
              <View style={styles.cardContent}>
                <ThemedText style={styles.cardTitle} numberOfLines={1}>
                  {item.title}
                </ThemedText>
                <ThemedText 
                  style={[styles.cardPrice, { color: colors.primary }]}
                  type="defaultSemiBold">
                  {item.price}
                </ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.md,
    paddingBottom: Spacing.xl,
  },
  header: {
    marginBottom: Spacing.lg,
    paddingTop: Spacing.md,
  },
  headerTitle: {
    marginBottom: Spacing.xs,
  },
  headerSubtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    justifyContent: 'space-between',
  },
  imageCard: {
    width: '47%',
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    marginBottom: Spacing.md,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    position: 'relative',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cardContent: {
    padding: Spacing.md,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
