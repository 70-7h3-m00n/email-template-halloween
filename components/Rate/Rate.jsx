import { rateStyles as stls } from './rateStyles'
import { Container, Row, Column, Link } from 'postonents'

const Rate = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>Как вам такая рассылка?</p>
            <div style={stls.link}>
              <Link href='/'>
                <p style={stls.rate}></p>
              </Link>
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Rate
