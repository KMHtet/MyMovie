import {HeaderProps} from '@components/header/Type';
import {ReactNode} from 'react';
import {ColorValue, StatusBarStyle, ViewStyle} from 'react-native';

export interface BaseScreenProps extends HeaderProps {
  isBackHide?: boolean;
  isUnScroll?: boolean;
  isHeaderHide?: boolean;
  bodyStyle?: ViewStyle;
  backgroundColor?: ColorValue;
  customHeader?: JSX.Element | JSX.Element[] | ReactNode;
  useView?: boolean;
  barStyle?: StatusBarStyle | null;
  scrollViewProps?: any;
  paddingBottom?: number | null;
  paddingTop?: number | null;
  title?: string;
  isImageHeaderLarge?: boolean;
}
