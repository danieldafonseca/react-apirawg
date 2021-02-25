import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Home = () => {

  useEffect(() => {
    listaJogos()
  },[]);

  const [jogos, setJogos] = useState([]);



  const listaJogos = () => {
    axios.get('https://api.rawg.io/api/games?key=889985bb1e46469c80a32576736bbcb8&ordering=-added')
    .then((response)=>{
      const allJogos = response.data.results;
      setJogos(allJogos);
    })

  }

  return (

    <Row xs={1} md={2} lg={3}>
      {
        jogos.map(jogo => (
          <Col key={jogo.id} >
          <Link to={{
              pathname: '/game/${jogo.name}',
              gameProps:{
                jogo: jogo
              }
            }}>
          <Card >

   <Card.Img width={250}height={220} src={jogo.background_image} />
   <Card.Body>
     <Card.Title>{jogo.name}</Card.Title>
   </Card.Body>
 </Card>
  </Link>
  </Col>
        ))
      }
    </Row>
  )
}

export default Home;
