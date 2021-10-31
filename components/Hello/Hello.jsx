import { HelloStyles as stls } from './helloStyles'
import { Container, Row, Column } from 'postonents'

const Hello = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.fullwidth}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>Здравствуйте!</p>
            <p style={stls.p} align='center'>
              С нами даже в Halloween вам не грозят мрачные истории. <br />Не верите?
              Мы докажем.
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Hello
