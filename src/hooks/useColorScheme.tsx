import { useColorScheme as useRNColorScheme } from 'react-native';

export const useColorScheme = (): 'light' | 'dark' => {
  // Use React Native's useColorScheme hook to determine the current color scheme
  const scheme = useRNColorScheme();

  // Return 'light' or 'dark'
  return scheme === 'dark' ? 'dark' : 'light';
};
