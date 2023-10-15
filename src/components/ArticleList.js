import Article from "./Article"

function ArticleList ({posts}) {
    const articlePosts = posts.map(article => <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>)
    return (
        <main>
            {articlePosts}
        </main>
    )
}

export default ArticleList
