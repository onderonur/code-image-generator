import { trackFocusVisible } from '@zag-js/focus-visible';
import { useEffect, useState } from 'react';

// https://twitter.com/thesegunadebayo/status/1534124029010903041
// https://github.com/chakra-ui/zag/blob/main/examples/next-ts/pages/focus-visible.tsx
export function useFocusVisible() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  useEffect(() => {
    return trackFocusVisible({
      onChange(details) {
        setIsFocusVisible(details.isFocusVisible);
      },
    });
  }, []);

  return {
    isFocusVisible: isFocused && isFocusVisible,
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: () => {
      setIsFocused(false);
    },
  };
}
