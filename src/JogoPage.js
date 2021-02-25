import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const JogoPage= (props) => {

  const { jogo } = props.location.gameProps

  return (
    <div>

        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">{jogo.name}</h1>
              <p>Lançamento: {jogo.released}</p>
              <p>Pontaçao: {jogo.rating}</p>
              <p>Genero(s):
                {
                   jogo.genres.map(g => ` ${g.name} `)
                }
                </p>
                <p>Plataforma(s):
                  {
                     jogo.platforms.map(p => ` ${p.platform.name} `)
                  }
                  </p>
            </div>
          </div>
        </section>

      <Row xs={2} md={4} lg={6}>
        {
          jogo.short_screenshots.map(ss => <Col><Image  width={200} height={150} src={ss.image} alt='screenshot' fluid /></Col>)
        }
        </Row>
    </div>
  );
}

export default JogoPage;
