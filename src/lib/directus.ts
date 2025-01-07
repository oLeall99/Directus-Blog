import { createDirectus, createItem, updateItem, deleteItem, rest, readItems } from '@directus/sdk';

const directus = createDirectus('http://localhost:8055').with(rest());
export default directus;

export async function getPages() {
  return directus.request(readItems('pages'));
}

// Criar uma página
export async function createPage(data: { Title: string; Description: string; theme: string }) {
  return directus.request(createItem('pages', data));
}

// Atualizar uma página
export async function updatePage(id: string, data: { Title?: string; Description?: string; theme?: string }) {
  return directus.request(updateItem('pages', id, data));
}

// Excluir uma página
export async function deletePage(id: string) {
  return directus.request(deleteItem('pages', id));
}