import { articleStyles as stls } from './articleStyles'
import { Container, Row, Column, Link } from 'postonents'

const Article = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>История о потерянном времени</p>
            <p style={stls.p}>
              Две подруги одновременно решили поступить на дополнительное
              образование. Одна поступила в НАНО &quot;ИПО&quot; на программу
              профессиональной переподготовки, шести-месячного обучения, прошла
              курс экстерном и получила диплом. А вторая решила занять поступать
              на второе высшее образование, отучилась 1 год из 3 лет, затем
              из-за загрузки на работе не смогла продолжить обучение и взяла
              академический отпуск. <br /> <br />
              Несколько месяцев она потратила на поиски свободного времени, но в
              итоге так и не смогла продолжить учебу. А первая девушка уже через
              месяц получила повышение на работе.
            </p>
            {/* <div style={stls.btn}>
            </div> */}
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
