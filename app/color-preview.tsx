/**
 * Takas Uygulaması - Renk Paleti Önizleme Sayfası
 * Turuncu ve Beyaz tasarım sistemi
 */

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BorderRadius, ButtonStyles, PanelColors, Spacing } from '@/constants/design-system';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ColorPreviewScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const ColorCard = ({ title, color, hex }: { title: string; color: string; hex: string }) => (
    <View style={styles.colorCard}>
      <View style={[styles.colorSwatch, { backgroundColor: color }]} />
      <ThemedText style={styles.colorTitle}>{title}</ThemedText>
      <ThemedText style={styles.colorHex}>{hex}</ThemedText>
    </View>
  );

  const ButtonPreview = ({ title, style, textColor }: { title: string; style: any; textColor: string }) => (
    <TouchableOpacity style={[styles.buttonPreview, style]}>
      <ThemedText style={{ color: textColor, fontWeight: '600' }}>{title}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Takas Uygulaması
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Turuncu ve Beyaz Renk Paleti
        </ThemedText>

        {/* Ana Renkler */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Ana Renkler
          </ThemedText>
          <View style={styles.colorGrid}>
            <ColorCard title="Turuncu" color={colors.primary} hex="#FF6B35" />
            <ColorCard title="Koyu Turuncu" color={colors.primaryDark} hex="#D45A1F" />
            <ColorCard title="Açık Turuncu" color={colors.primaryLight} hex="#FFB085" />
            <ColorCard title="Beyaz" color={colors.white} hex="#FFFFFF" />
          </View>
        </View>

        {/* Panel Renkleri */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Panel Renkleri
          </ThemedText>
          <View style={styles.panelContainer}>
            <View style={[styles.panelCard, { backgroundColor: PanelColors.admin.accent + '20', borderColor: PanelColors.admin.accent }]}>
              <View style={[styles.panelBadge, { backgroundColor: PanelColors.admin.badge }]} />
              <ThemedText style={styles.panelTitle}>Admin Paneli</ThemedText>
              <ThemedText style={styles.panelDescription}>
                Koyu turuncu vurgular, kırmızı badge
              </ThemedText>
            </View>
            <View style={[styles.panelCard, { backgroundColor: PanelColors.user.accent + '20', borderColor: PanelColors.user.accent }]}>
              <View style={[styles.panelBadge, { backgroundColor: PanelColors.user.badge }]} />
              <ThemedText style={styles.panelTitle}>Kullanıcı Paneli</ThemedText>
              <ThemedText style={styles.panelDescription}>
                Standart turuncu, yeşil badge
              </ThemedText>
            </View>
            <View style={[styles.panelCard, { backgroundColor: PanelColors.public.accent + '20', borderColor: PanelColors.public.accent }]}>
              <View style={[styles.panelBadge, { backgroundColor: PanelColors.public.badge }]} />
              <ThemedText style={styles.panelTitle}>Public Paneli</ThemedText>
              <ThemedText style={styles.panelDescription}>
                Açık turuncu, sarı badge
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Buton Stilleri */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Buton Stilleri
          </ThemedText>
          <View style={styles.buttonContainer}>
            <ButtonPreview 
              title="Primary Buton" 
              style={[ButtonStyles.primary, { backgroundColor: colors.primary }]} 
              textColor={colors.white}
            />
            <ButtonPreview 
              title="Secondary Buton" 
              style={[ButtonStyles.secondary, { borderColor: colors.primary }]} 
              textColor={colors.primary}
            />
            <ButtonPreview 
              title="Outline Buton" 
              style={[ButtonStyles.outline, { borderColor: colors.border }]} 
              textColor={colors.primary}
            />
          </View>
        </View>

        {/* Durum Renkleri */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Durum Renkleri
          </ThemedText>
          <View style={styles.colorGrid}>
            <ColorCard title="Başarı" color={colors.success} hex={colorScheme === 'dark' ? '#34D058' : '#28A745'} />
            <ColorCard title="Hata" color={colors.error} hex={colorScheme === 'dark' ? '#F85149' : '#DC3545'} />
            <ColorCard title="Uyarı" color={colors.warning} hex={colorScheme === 'dark' ? '#FBBF24' : '#FFC107'} />
          </View>
        </View>

        {/* Örnek Kart Tasarımı */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Örnek Kart Tasarımı
          </ThemedText>
          <View style={[styles.exampleCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.cardHeader}>
              <View style={[styles.cardIcon, { backgroundColor: colors.primary + '20' }]}>
                <ThemedText style={{ color: colors.primary, fontSize: 24 }}>🔄</ThemedText>
              </View>
              <View style={styles.cardHeaderText}>
                <ThemedText style={styles.cardTitle}>Takas Öğesi</ThemedText>
                <ThemedText style={styles.cardSubtitle}>Örnek ürün açıklaması</ThemedText>
              </View>
            </View>
            <View style={[styles.cardFooter, { borderTopColor: colors.divider }]}>
              <ThemedText style={[styles.cardPrice, { color: colors.primary }]}>500 TL</ThemedText>
              <TouchableOpacity style={[styles.cardButton, { backgroundColor: colors.primary }]}>
                <ThemedText style={{ color: colors.white, fontWeight: '600' }}>Detay</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: Spacing.lg,
  },
  title: {
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: Spacing.xl,
    opacity: 0.7,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    marginBottom: Spacing.md,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  colorCard: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    backgroundColor: '#F5F5F5',
  },
  colorSwatch: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  colorTitle: {
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  colorHex: {
    fontSize: 12,
    opacity: 0.6,
  },
  panelContainer: {
    gap: Spacing.md,
  },
  panelCard: {
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    borderWidth: 2,
    marginBottom: Spacing.md,
  },
  panelBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginBottom: Spacing.sm,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  panelDescription: {
    fontSize: 14,
    opacity: 0.7,
  },
  buttonContainer: {
    gap: Spacing.md,
  },
  buttonPreview: {
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  exampleCard: {
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    padding: Spacing.md,
    backgroundColor: '#FFFFFF',
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  cardHeaderText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  cardSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.md,
    borderTopWidth: 1,
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
});

