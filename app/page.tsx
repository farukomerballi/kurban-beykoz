// Build-time'da config verisini import ederek SSG yapıyoruz
// Bu sayede Google bot tüm içeriği HTML'de görebilir
import rawConfig from '../public/data/config.json';
import { ClientPage } from './components/ClientPage';
import { SiteConfig } from './types/config';

// JSON import'ta TypeScript union type'ları string olarak algılar, cast gerekiyor
const configData = rawConfig as unknown as SiteConfig;

export default function Home() {
  // Config verisini doğrudan server component'te okuyoruz
  // Client-side fetch yerine build-time data kullanıyoruz
  return <ClientPage config={configData} />;
}
