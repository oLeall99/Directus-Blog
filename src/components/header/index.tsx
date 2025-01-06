import styles from './header.module.scss';

const options = ['Technology', 'Programming', 'Design', 'Lifestyle', 'Health'];

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Directus Blog</h1>
      <div className={styles.controls}>
        <button>Criar</button>
        <button>Atualizar</button>
        <button>Excluir</button>
        <div className={styles.selectWrapper}>
          <label htmlFor="pages-select">Page</label>
          <select id="pages-select">
            {options.map((option, index) => (
              <option key={index} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
