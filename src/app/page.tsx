import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.main}>
      <h1>Blog</h1>
      <div className={styles.blogContainer}>
        <section className={styles.content}>
          <h2>Welcome to the Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
            amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget
            elementum magna tristique.
          </p>
          <p>
            Integer pulvinar leo id viverra feugiat. Pellentesque libero justo,
            semper at tempus vel, ultrices in ligula.
          </p>
        </section>
      </div>
    </main>
  );
}
