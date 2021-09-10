import styled from'styled-components';

export const Article = styled.article`
  background-color:${props=>props.score? 'orange ': 'blue'};
  width:90vw;
  padding:3rem 4rem ;
  margin:0.5rem;

  a{
      text-decoration:none;
      h2{
          margin:0.5rem;
          color:white;
      }
  }
  h4{
      margin:0.5rem;
  }
  p{
      margin:0.5rem;
  }
  span{
      margin:0.5rem;
  }

  

  @media (min-width:850px){
    width:40vw
  }
  @media (min-width:1200px){
    width:30vw
  }
  @media (min-width:1900px){
    width:20vw
  }
`