import { Layout } from "../../components/Layout/Layout";
import { BackgroundImg, Container } from "./styled";
import satellites from '../../Satellites/satellites.json'
import { useEffect, useState } from "react";


export const HomePage = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  
  // setInterval(()=>{
  //   setRandomNumber(Math.trunc(Math.random()*8))
  // }, 8000)

  return (
    <Layout>
        <BackgroundImg src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Container>
          {/* <p>here you will find miniature replicas of the main satellites that explore the universe. Choose yours and complete your collection!</p> */}
          <div className="text">
            <h1>Are you passionate about the secrets of the Universe?</h1>
            <h2>Then learn more about the main satellites that traveled in space and unraveled mysteries!</h2>
          </div>
          <div className="image">
            <div className="image1">
              <img src={satellites[0].image}/>
            </div>
            <div className="image2">
              <img src={satellites[7].image}/>
            </div>
            <div className="image3">
              <img src={satellites[5].image}/>
            </div>
          </div>
        </Container>
    </Layout>
  )
}