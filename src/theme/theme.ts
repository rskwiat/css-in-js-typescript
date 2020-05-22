import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  bg: '#34495e',
  text: '#f8f8f8',
  banner: '#1abc9c',
};

export const lightTheme: DefaultTheme = {
  bg: '#f8f8f8',
  text: '#34495e',
  banner: '#1abc9c',
};

const size = {
  small: '640px',
  medium: '768px',
  large: '1024px',
};

export const device = {
  small: `(min-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
};
