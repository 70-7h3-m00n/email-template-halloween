import {
  fetchNotionData,
  getLastSixMonths,
  isCurrentMonth,
  sumMonths
} from '../helpers'
import { PostonentsProvider } from 'postonents'
import {
  HeaderLogo,
  EmailWrapper,
  HeaderLinks,
  LeaderboardsMonth,
  LeaderboardsSixMonths,
  Banner,
  Winner,
  Prize,
  FooterContacts,
  FooterLinks,
  Footer
} from '../components'
import Hello from '../components/Hello/Hello'
import Article from '../components/Article/Article'

const Home = ({ data }) => {
  const dataThisMonth = data
    .filter(item => isCurrentMonth(item.month) && item)
    .sort((a, b) => b.result - a.result)
  const lastSixMonths = getLastSixMonths()
  const dataLastSixMonths = data.filter(item => {
    let include = false
    lastSixMonths.forEach(month => {
      month.toLowerCase() === item.month.toLowerCase() && (include = true)
    })
    if (include) return item
  })
  const dataFromJuly = data.filter(item => {
    const months = [
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ]

    let include = false
    months.forEach(month => {
      month.toLowerCase() === item.month.toLowerCase() && (include = true)
    })
    if (include) return item
  })

  const twoMonthsInFromAugust = data.filter(item => {
    const months = ['Август', 'Сентябрь']

    let include = false
    months.forEach(month => {
      month.toLowerCase() === item.month.toLowerCase() && (include = true)
    })
    if (include) return item
  })

  console.log(data)
  const twoMonthsInFromAugustSumUp = sumMonths(twoMonthsInFromAugust)
  const dataFromJulySumUp = sumMonths(dataFromJuly)

  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Banner />
        <Hello />
        <Article />

        <Winner data={twoMonthsInFromAugustSumUp} />
        <LeaderboardsMonth data={twoMonthsInFromAugustSumUp} />
        <Prize data={dataFromJulySumUp} />
        <LeaderboardsSixMonths data={dataFromJulySumUp} />
        <FooterContacts />
        <FooterLinks />
        <Footer />
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export async function getStaticProps(context) {
  // const data = await fetchNotionData()
  const data = []

  return {
    props: {
      data
    }
  }
}

export default Home
