import data from "../../data/articles.json";

export const GET = async ({ params, req }) => {
  const allArticles = data.articles;

  const mappedArticles = allArticles.map((article) => { 
    return {
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        image: `/images/${article.image}`,
        category: article.category,
        created_at: article.created_at,
        author: article.author,
        url: `/articles/${article.id}`,
        slug: article.title.toLowerCase().replaceAll(" ", '-'),
    };
});

  return new Response(JSON.stringify(mappedArticles));
};

export function getStaticPaths() {
  return [{ params: { id: 1 } }];
}
