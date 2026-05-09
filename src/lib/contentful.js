const SPACE_ID = 'ij2od3p18z0x';
const ACCESS_TOKEN = 'gjKf7metGzT7YeKgJmEk5THfq8lUcxSfDGcMSYLmKJc';

export async function getBlogPosts() {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?content_type=blogPost&order=-sys.createdAt&access_token=${ACCESS_TOKEN}`
    );
    const data = await res.json();
    return data.items || [];
  } catch (e) {
    return [];
  }
}

export async function getBlogPost(slug) {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?content_type=blogPost&fields.slug=${slug}&access_token=${ACCESS_TOKEN}`
    );
    const data = await res.json();
    return data.items?.[0] || null;
  } catch (e) {
    return null;
  }
}
