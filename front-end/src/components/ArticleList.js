import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
    if (!articles || articles.length === 0) {
        return <p>Nenhum artigo encontrado.</p>;
    }

    return (
        <>
            {articles.map(article => (
                <Link key={article.name} className="article-list-item" to={`/articlelist/${article.name}`}>
                    <h1>{article.title}</h1>
                    <p>{article.content ? article.content.substring(0, 40) : "Sem conteúdo"}... | Votos: {article.upvotes}</p>
                </Link>
            ))}
        </>
    );
};

export default ArticleList;
