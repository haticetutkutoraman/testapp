/**
 * Takas Uygulaması - Turuncu ve Beyaz Renk Paleti
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

import { Platform } from 'react-native';

// Ana renkler - Turuncu ve Beyaz
const primaryOrange = '#FF6B35'; // Ana turuncu
const primaryOrangeDark = '#D45A1F'; // Koyu turuncu (vurgular için)
const primaryOrangeLight = '#FFB085'; // Açık turuncu (hover/light states)
const primaryWhite = '#FFFFFF'; // Beyaz
const primaryWhiteOff = '#FFF8F5'; // Hafif bej-beyaz (arka planlar için)

// Yardımcı renkler
const grayDark = '#2C2C2C'; // Koyu gri (metin için)
const grayMedium = '#6B6B6B'; // Orta gri
const grayLight = '#E5E5E5'; // Açık gri (kenarlıklar için)
const successGreen = '#28A745'; // Başarı yeşili
const errorRed = '#DC3545'; // Hata kırmızısı
const warningYellow = '#FFC107'; // Uyarı sarısı

// Light mode (beyaz arka plan, turuncu vurgular)
const tintColorLight = primaryOrange;
const backgroundLight = primaryWhite;

// Dark mode (koyu arka plan, turuncu vurgular)
const tintColorDark = primaryOrangeLight;
const backgroundDark = '#1A1A1A';

export const Colors = {
  light: {
    // Ana renkler
    text: grayDark,
    background: backgroundLight,
    tint: tintColorLight,
    
    // Turuncu paleti
    primary: primaryOrange,
    primaryDark: primaryOrangeDark,
    primaryLight: primaryOrangeLight,
    
    // Beyaz paleti
    white: primaryWhite,
    whiteOff: primaryWhiteOff,
    
    // Yardımcı renkler
    icon: grayMedium,
    tabIconDefault: grayMedium,
    tabIconSelected: tintColorLight,
    
    // Border ve divider
    border: grayLight,
    divider: grayLight,
    
    // Durum renkleri
    success: successGreen,
    error: errorRed,
    warning: warningYellow,
    
    // Kart ve yüzey renkleri
    card: primaryWhite,
    cardElevated: primaryWhiteOff,
    surface: primaryWhiteOff,
  },
  dark: {
    // Ana renkler
    text: '#F5F5F5',
    background: backgroundDark,
    tint: tintColorDark,
    
    // Turuncu paleti
    primary: primaryOrangeLight,
    primaryDark: primaryOrange,
    primaryLight: '#FFC9A8',
    
    // Beyaz paleti
    white: '#2C2C2C',
    whiteOff: '#1F1F1F',
    
    // Yardımcı renkler
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    
    // Border ve divider
    border: '#3A3A3A',
    divider: '#3A3A3A',
    
    // Durum renkleri
    success: '#34D058',
    error: '#F85149',
    warning: '#FBBF24',
    
    // Kart ve yüzey renkleri
    card: '#2C2C2C',
    cardElevated: '#353535',
    surface: '#242424',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
