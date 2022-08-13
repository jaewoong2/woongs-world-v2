import CardContents from './CardContents'
import CardImageWithContainer from './CardImage'
import CardLayout from './CardLayout'

const Card = () => {
  return (
    <CardLayout>
      <CardImageWithContainer
        src="https://avatars.githubusercontent.com/u/63512217?v=4"
        alt="임재웅"
      />
      <CardContents paragraphs={['Lim Jaewoong', 'SoongSil Univ.']} />
    </CardLayout>
  )
}

export default Card
