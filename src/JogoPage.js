import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const JogoPage= (props) => {

  const { jogo } = props.location.gameProps

  return (
    <div>
      <h1>{jogo.name}</h1>
      <p>Lançamento: {jogo.released}</p>
      <p>Pontaçao: {jogo.rating}</p>
      <p>Genero(s):
        {
           jogo.genres.map(g => ` ${g.name} `)
        }
        </p>

      <h3>Plataforma(s):</h3>
        {
          jogo.platforms.map(p => ` ${p.platform.name} `)
        }

      <Row xs={1} md={2} lg={3}>
        {
          jogo.short_screenshots.map(ss => <Col><Image width={400} height={300} src={ss.image} alt='screenshot' rounded /></Col>)
        }
        </Row>
    </div>
  );
}

export default JogoPage;
