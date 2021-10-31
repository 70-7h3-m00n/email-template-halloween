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
  Banner,
  Hello,
  Article,
  Articles,
  ChooseProgram,
  Rate,
  FooterContacts,
  FooterLinks,
  Footer
} from '../components'

const Home = ({ data }) => {
  return (
    <PostonentsProvider
      theme={{
        typo: { fontFamily: 'Stem, sans-serif' }
      }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Banner />
        <Hello />
        <Article />
        <ChooseProgram />
        <Articles />
        <Rate />
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
