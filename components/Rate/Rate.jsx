import { rateStyles as stls } from './rateStyles'
import { Container, Row, Column, Link } from 'postonents'

const Rate = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>Интересные статьи от НАНО «ИПО»</p>
            <p style={stls.p}>
              Понятие «сильная личность» определяется не какой-либо одной
              особенностью, а целым комплексом устойчивых характеристик.
            </p>
            <div style={stls.btn}>
              <Link href={'/'}>
                <span style={stls.link}>Читать статью</span>
              </Link>
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Rate
