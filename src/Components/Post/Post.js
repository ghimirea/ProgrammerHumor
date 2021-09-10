import React from 'react'
import { baseURL } from '../../utils/AxiosUtil';
import { Article } from '../StyledComponents/Article.style';
import { evenOddScore } from '../../utils/helper';


const Post = ({title,comments, author, upVote, permalink, score}) => {
    return (
        
        <Article score={evenOddScore(score)}>
        <a href={`${baseURL}${permalink}`} target='_blank' rel="noreferrer"><h2>{title}</h2></a>
        <h4>{`Author: ${author}`}</h4>
        <p>{`Comments: ${comments}`}</p>
        <span>{`Up votes#: ${upVote}`}</span>
        </Article>
            
        
    )
}

export default Post
