/**
 * Takas Uygulaması Tasarım Sistemi
 * Renk paleti: Turuncu (#FF6B35) ve Beyaz (#FFFFFF)
 */

import { Colors } from './theme';

// Spacing sistem
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border radius
export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Shadow presets
export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
};

// Typography scale
export const Typography = {
  display: {
    fontSize: 40,
    fontWeight: 'bold' as const,
    lineHeight: 48,
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodyBold: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  captionBold: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 18,
  },
};

// Panel tipi renkleri (isteğe bağlı - farklı paneller için)
export const PanelColors = {
  admin: {
    accent: Colors.light.primaryDark, // Daha koyu turuncu
    badge: Colors.light.error, // Admin badge için kırmızı
  },
  user: {
    accent: Colors.light.primary, // Standart turuncu
    badge: Colors.light.success, // Kullanıcı badge için yeşil
  },
  public: {
    accent: Colors.light.primaryLight, // Daha açık turuncu
    badge: Colors.light.warning, // Public badge için sarı
  },
};

// Buton stilleri
export const ButtonStyles = {
  primary: {
    backgroundColor: Colors.light.primary,
    color: Colors.light.white,
  },
  secondary: {
    backgroundColor: Colors.light.white,
    color: Colors.light.primary,
    borderWidth: 2,
    borderColor: Colors.light.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    color: Colors.light.primary,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
};

