
        import React from 'react'
      import styled from 'styled-components'  
      import {components} from 'react'
        
        
        
 export const Cont = styled.div`{

    position: relative;
    width: 100%;
    box-sizing: border-box; 
    display: flex;
    flex-flow: column wrap;
           }
      @media (min-width: 768px) {
              width: 750px;
          }
      }
      
      @media (min-width: 992px)  {
              width: 970px;
          }
      }
      
      @media (min-width: 1200px)  {
              width: 1170px;
          }
      }
      `
       export const Row= styled.div`
       
       display: flex;
       
       flex-flow: row wrap;
       width: 90%;
       height: 100%;
    
       }`
      /* Cols */
 export const Cols= styled.div`
      .col-xs-12 {
          grid-column: span 12
      }
      
      .col-xs-11 {
          grid-column: span 11;
      }
      
      .col-xs-10 {
          grid-column: span 10
      }
      
      .col-xs-9 {
          grid-column: span 9
      }
      
      .col-xs-8 {
          grid-column: span 8
      }
      
      .col-xs-7 {
          grid-column: span 7
      }
      
      .col-xs-6 {
          grid-column: span 6
      }
      
      .col-xs-5 {
          grid-column: span 5
      }
      
      .col-xs-4 {
          grid-column: span 4
      }
      
      .col-xs-3 {
          grid-column: span 3
      }
      
      .col-xs-2 {
          grid-column: span 2
      }
      
      .col-xs-1 {
          grid-column: span 1
      }
      /* Cols */
      
      @media (min-width: 768px) {
          .col-sm-12 {
              grid-column: span 12
          }
          .col-sm-11 {
              grid-column: span 11;
          }
          .col-sm-10 {
              grid-column: span 10
          }
          .col-sm-9 {
              grid-column: span 9
          }
          .col-sm-8 {
              grid-column: span 8
          }
          .col-sm-7 {
              grid-column: span 7
          }
          .col-sm-6 {
              grid-column: span 6
          }
          .col-sm-5 {
              grid-column: span 5
          }
          .col-sm-4 {
              grid-column: span 4
          }
          .col-sm-3 {
              grid-column: span 3
          }
          .col-sm-2 {
              grid-column: span 2
          }
          .col-sm-1 {
              grid-column: span 1
          }
      }
      
      @media (min-width: 992px) {
          .col-md-12 {
              grid-column: span 12
          }
          .col-md-11 {
              grid-column: span 11;
          }
          .col-md-10 {
              grid-column: span 10
          }
          .col-md-9 {
              grid-column: span 9
          }
          .col-md-8 {
              grid-column: span 8
          }
          .col-md-7 {
              grid-column: span 7
          }
          .col-md-6 {
              grid-column: span 6
          }
          .col-md-5 {
              grid-column: span 5
          }
          .col-md-4 {
              grid-column: span 4
          }
          .col-md-3 {
              grid-column: span 3
          }
          .col-md-2 {
              grid-column: span 2
          }
          .col-md-1 {
              grid-column: span 1
          }
      }
      
      @media (min-width: 1200px) {
          .col-lg-12 {
              grid-column: span 12
          }
          .col-lg-11 {
              grid-column: span 11;
          }
          .col-lg-10 {
              grid-column: span 10
          }
          .col-lg-9 {
              grid-column: span 9
          }
          .col-lg-8 {
              grid-column: span 8
          }
          .col-lg-7 {
              grid-column: span 7
          }
          .col-lg-6 {
              grid-column: span 6
          }
          .col-lg-5 {
              grid-column: span 5
          }
          .col-lg-4 {
              grid-column: span 4
          }
          .col-lg-3 {
              grid-column: span 3
          }
          .col-lg-2 {
              grid-column: span 2
          }
          .col-lg-1 {
              grid-column: span 1
          }
      }
  `


  
export const Subsolo = styled.footer`{
    background: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px;
  }`