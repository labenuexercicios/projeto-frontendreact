import styled from "styled-components"

export const ContainerAcount = styled.main`
 display:flex;
     justify-content:center;
margin-top:16px;
 > div{
    display:flex;
     justify-content:center;
     width:100vw; 
        .mini-card{
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

            display:flex;
            height:50px;
            width:300px;
           
            align-items:center;
            padding:8px;
            justify-content:space-between;
            border-radius:16px;
            margin: 8px;
            cursor: pointer;
        .icon-image{
            width:30px;
           
        }
        .body-card{
            padding-left:8px;
            margin-right:auto;
            
            .name{
                font-weight:normal;
                font-size:16px;
            }
            .description{
                font-weight:lighter;
                font-size:10px;
            }
        }
    }

    .main-view{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

        width: 100%;
     
        border-radius:16px;
        padding:8px;
    }

}



`