'use client';

import { useState, useEffect } from 'react';
import { SiteConfig } from '../types/config';

export function useConfig() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadConfig() {
      try {
        const response = await fetch('/data/config.json');
        if (!response.ok) {
          throw new Error('Config yüklenemedi');
        }
        const data = await response.json();
        setConfig(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata');
      } finally {
        setLoading(false);
      }
    }

    loadConfig();
  }, []);

  return { config, loading, error };
}
