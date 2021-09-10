import React,{useEffect, useState} from 'react'
import { getRequest } from '../../utils/AxiosUtil'
import { sortList } from '../../utils/helper';
import { Container } from '../StyledComponents/Container.style';
import { evenOddScore } from '../../utils/helper';
import Post from '../Post/Post';

const SubReddit = () => {

    const[topics, setTopics] = useState([])
     sortList(topics)
    

    const getPost = async()=>{
        try {
            const response = await getRequest('/r/ProgrammerHumor.json?limit=19')
            setTopics(response.data.data.children)
            console.log(response.data.data.children);
            
        } catch (error) {
            console.error("Error getting the SubReddit", error.message)
            
        }
    }

    useEffect(() => {
        getPost()
    }, [])
    return (
        <Container>
        {topics && topics.map(topic=>{
            return(
                <Post
                    key={topic.data.id}
                    title={topic.data.title}
                    comments={topic.data.num_comments}
                    author={topic.data.author_fullname}
                    upVote={topic.data.ups}
                    score={topic.data.score}
                    permalink={topic.data.permalink}
                />  
            )
        })}
        </Container>  
      
    )
}

export default SubReddit;
