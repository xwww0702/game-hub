// src/hooks/useTracker.ts
import { useCallback } from 'react';
import { trackEvent } from '../utils/track';

export function useTracker(userId: string) {
  return useCallback(
    (event: string, extraData = {}) => {
      trackEvent({ event, userId, ...extraData });
    },
    [userId]
  );
}