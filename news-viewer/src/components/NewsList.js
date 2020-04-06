import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}
`;

// const sampleArticle = {
//     title: '제목',
//     description: '내용',
//     url: 'https://google.com',
//     urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await axios.get(
                    'http://newsapi.org/v2/top-headlines?country=kr&apiKey=c6e1f1772e1b4036ab8c212686e2ec4a',
                );
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    //대기 중일 때
    if(loading){
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }
    //아직 articles 값이 설정되지 않았을 때
    if(!articles){
        return null;
    }

    //articles 값이 유효할 때
    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={articles.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;