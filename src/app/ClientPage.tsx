'use client'; // Mark this component as a Client Component

import { createPage, updatePage, deletePage } from '@/lib/directus';
import styles from './page.module.scss';

interface Page {
  id: string;
  Title: string;
  Description: string;
  theme: string;
}

interface ClientPageProps {
  pages: Page[];
}

export default function ClientPage({ pages }: ClientPageProps) {
  // Utility function to handle user input through prompt
  const handlePrompt = (message: string, currentValue: string): string | undefined => {
    const input = prompt(message, currentValue);
    return input === null ? undefined : input.trim();
  };

  // Handle creating a new page
  const handleCreatePage = async () => {
    const Title = handlePrompt('Digite o título da página:', '');
    if (!Title) return alert('O título é obrigatório!');

    const Description = handlePrompt('Digite a descrição da página:', '');
    if (!Description) return alert('A descrição é obrigatória!');

    const theme = handlePrompt('Digite o tema da página:', '');
    if (!theme) return alert('O tema é obrigatório!');

    await createPage({ Title, Description, theme });
    alert('Página criada com sucesso! Recarregue a página para ver as mudanças.');
  };

  // Handle updating an existing page
  const handleUpdatePage = async (id: string, currentTitle: string, currentDescription: string, currentTheme: string) => {
    const Title = handlePrompt('Digite o novo título da página (ou deixe vazio para manter o atual):', currentTitle);
    const Description = handlePrompt('Digite a nova descrição da página (ou deixe vazio para manter a atual):', currentDescription);
    const theme = handlePrompt('Digite o novo tema da página (ou deixe vazio para manter o atual):', currentTheme);

    // Ensure we send the updated values or the existing ones if no new input was given
    const updatedData = {
      Title: Title || currentTitle,
      Description: Description || currentDescription,
      theme: theme || currentTheme,
    };

    if (updatedData.Title === currentTitle && updatedData.Description === currentDescription && updatedData.theme === currentTheme) {
      return alert('Nenhuma alteração feita.');
    }

    await updatePage(id, updatedData);
    alert('Página atualizada com sucesso! Recarregue a página para ver as mudanças.');
  };

  // Handle deleting a page
  const handleDeletePage = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta página?')) {
      await deletePage(id);
      alert('Página excluída com sucesso! Recarregue a página para ver as mudanças.');
    }
  };

  return (
    <div className={styles.blogContainer}>
       <div className={styles.controls}>
        <button onClick={handleCreatePage}>Criar</button>
      </div>
        <div className={styles.posts}>
        {pages.map((page) => (
          <div key={page.id} className={styles.postItem}>
            <h2>{page.Title}</h2>
            <p>{page.Description}</p>
            <span>Tema: {page.theme}</span>
            <div className={styles.postActions}>
              <button onClick={() => handleUpdatePage(page.id, page.Title, page.Description, page.theme)}>Editar</button>
              <button onClick={() => handleDeletePage(page.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
