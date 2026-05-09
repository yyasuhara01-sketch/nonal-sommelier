const SPACE_ID = 'ij2od3p18z0x';
const ACCESS_TOKEN = 'gjKf7metGzT7YeKgJmEk5THfq8lUcxSfDGcMSYLmKJc';

export async function getBlogPosts() {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?content_type=blogPost&order=-sys.createdAt&access_token=${ACCESS_TOKEN}`
    );
    const data = await res.json();
    return (data.items || []).map(item => ({
      sys: item.sys,
      fields: {
        title: item.fields.title?.['en-US'] || item.fields.title || '',
        slug: item.fields.slug?.['en-US'] || item.fields.slug || '',
        body: item.fields.body?.['en-US'] || item.fields.body || null,
        excerpt: item.fields.excerpt?.['en-US'] || item.fields.excerpt || '',
        category: item.fields.category?.['en-US'] || item.fields.category || '',
        score: item.fields.score?.['en-US'] || item.fields.score || 0,
        thumbnail: item.fields.thumbnail?.['en-US'] || item.fields.thumbnail || null,
      }
    }));
  } catch (e) {
    return [];
  }
}

export async function getBlogPost(slug) {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?content_type=blogPost&access_token=${ACCESS_TOKEN}`
    );
    const data = await res.json();
    const items = (data.items || []).map(item => ({
      sys: item.sys,
      fields: {
        title: item.fields.title?.['en-US'] || item.fields.title || '',
        slug: item.fields.slug?.['en-US'] || item.fields.slug || '',
        body: item.fields.body?.['en-US'] || item.fields.body || null,
        excerpt: item.fields.excerpt?.['en-US'] || item.fields.excerpt || '',
        category: item.fields.category?.['en-US'] || item.fields.category || '',
        score: item.fields.score?.['en-US'] || item.fields.score || 0,
        thumbnail: item.fields.thumbnail?.['en-US'] || item.fields.thumbnail || null,
      }
    }));
    return items.find(item => item.fields.slug === slug) || null;
  } catch (e) {
    return null;
  }
}
