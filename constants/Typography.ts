export const Typography = {
  fontFamily: {
    regular: 'NotoSans-Regular',
    bold: 'NotoSans-Bold',
    medium: 'NotoSans-Medium',
    semiBold: 'NotoSans-SemiBold',
    light: 'NotoSans-Light',
  },
  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
  },
  lineHeight: {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
    xxl: 32,
    xxxl: 36,
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  } as const,
};

export default Typography;