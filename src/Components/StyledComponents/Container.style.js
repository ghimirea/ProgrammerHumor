import styled from'styled-components';


export const Container = styled.div`
  display:grid;
  grid-template-columns:1fr ;
  justify-items:center;
  ${'' /* grid-template-rows:max-content; */}
  ${'' /* gap:0.5rem 0.5rem; */}

  @media (min-width:850px){
    grid-template-columns:1fr 1fr;
  }
  @media (min-width:1200px){
    grid-template-columns:1fr 1fr 1fr;
  }
  @media (min-width:1900px){
    grid-template-columns:1fr 1fr 1fr 1fr;
  }
  
  

`
