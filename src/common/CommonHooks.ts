import { trackFocusVisible } from '@zag-js/focus-visible';
import { useEffect, useState } from 'react';

// https://twitter.com/thesegunadebayo/status/1534124029010903041
export function useFocusVisible() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  useEffect(() => {
    trackFocusVisible(setIsFocusVisible);
  }, []);

  return {
    isFocusVisible: isFocused && isFocusVisible,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
  };
}
