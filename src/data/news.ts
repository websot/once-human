import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'news'>;

/** Все опубликованные статьи, свежие сверху */
export async function getPublished(): Promise<NewsEntry[]> {
  const entries = await getCollection('news', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function articlePath(entry: NewsEntry): string {
  return `/${entry.data.category}/${entry.id}`;
}
