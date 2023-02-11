import React, {Components} from "react";
import styled from "styled-components"
const FooterCtn = styled.div`

/*footer*/

display: flex;
flex-flow: column wrap;
  width: 90%;
height: 100%;
font-size: 15px;
max-height: 6vh;
left: 0;
right:0;


align-items: center;
z-index: 11;
  background-color:rgb(238, 239, 238);

 ul {
display: flex;
flex-flow: row wrap;
width: 100%;
height: 100%;


background-color: rgb(0, 0, 0);
}

/* footer */

 ul li {
  display: flex;
  flex-flow: column wrap;
width: 10%;
  height: 100%;
  font-size: 5px;
  background-color: rgb(238, 239, 238);
  justify-content: space-around;

}
 ul li a{
  align-items: center;
  align-self: center;
  text-decoration: none;
  list-style-type: none;
  color: rgb(22, 27, 1);
  font-size: 1.44rem;
  background-color:rgb(238, 239, 238);
  border-radius: 15px;

max-width: 90px;
  justify-content: space-around;
}
`
export function Footer(){	    
return(
	    <FooterCtn>

    <ul className="social-icons-list">
    <li>
      <a href="https://www.linkedin.com/in/erika-botechia" className="social-link" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </li>
  
    <li>
      <a href="mailto:botechiaeri@gmail.com" className="social-link"><i className="fab fa-google-plus-g"></i></a>
    </li>
      <li>
      <a href="https://www.github.com/botechia-erika" className="social-link" target="_blank"><i class="fa-brands fa-github"></i>

</a>
    </li>
    </ul>
  
    </FooterCtn>
 
)
}