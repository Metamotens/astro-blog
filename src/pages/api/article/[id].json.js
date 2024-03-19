import data from "../../../data/articles.json";

export const GET = async ({ params, request }) => {
  const { id } = params;
  const articles = data.articles;
  const article = articles.find((article) => article.id === Number(id));

  const mappedArticle = {
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    content: article.content,
    image: `/images/${article.image}`,
    category: article.category,
    created_at: article.created_at,
    author: article.author,
  };

  return new Response(JSON.stringify(mappedArticle));
};

export function getStaticPaths() {
  return data.articles.map((article) => ({ params: { id: article.id.toString() } }));
}

