import type { CollectionEntry } from 'astro:content';

export type ContentItem = CollectionEntry<'blog'>;

export function sortContentByDate(content: ContentItem[]): ContentItem[] {
    return content.sort((a, b) => {
        const dateA = 'publishedAt' in a.data ? a.data.pubDate : new Date();
        const dateB = 'publishedAt' in b.data ? b.data.pubDate : new Date();
        return dateB.getTime() - dateA.getTime();
    });
}

export function filterDrafts(content: ContentItem[]): ContentItem[] {
    return content.filter((item) => {
        if ('draft' in item.data) {
            return !item.data.draft;
        }
        return true;
    });
} 