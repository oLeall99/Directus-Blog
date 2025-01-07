// page.tsx (Server Component)
import { getPages } from '@/lib/directus';
import ClientPage from './ClientPage'; // Client Component for interactivity
import styles from './page.module.scss';

export default async function Page() {
  // Fetch pages on the server
  const pages: any = await getPages();

  return (
    <>
      <header className={styles.header}>
        <h1>Directus Blog</h1>
      </header>
      <main className={styles.main}>
        {/* Pass the pages data to the Client Component */}
        <ClientPage pages={pages} />
      </main>
    </>
  );
}
