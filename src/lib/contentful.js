import contentful from 'contentful';

const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getBlogPosts() {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    });
    return entries.items;
  } catch (e) {
    return [];
  }
}

export async function getBlogPost(slug) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (e) {
    return null;
  }
}
