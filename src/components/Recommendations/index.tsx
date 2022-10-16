/* COMPONENTS */
import { Heading } from '../Heading'

/* STYLES */
import {
  RecommendationsContainer,
  RecommendationsList,
  Recommendation,
  UserPhoto,
} from './styles'

/* ASSETS */
import JohnDoePhoto from '../../assets/john-doe.jpg'

export function Recommendations() {
  const recommendations = [
    {
      name: 'John Doe',
      office: 'Personal Trainner',
      text: `Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum has been the industry's standard dummy text ever`,
    },
    {
      name: 'John Doe 3',
      office: 'CEO da Fit Smart',
      text: `Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum has been the industry's standard dummy text ever`,
    },
    {
      name: 'John Doe 2',
      office: 'Nutricionista',
      text: `Lorem Ipsum has been the industry's standard dummy text ever Lorem `,
    },
  ]

  return (
    <RecommendationsContainer>
      <Heading
        title="Recomendações"
        subtitle="Profissionais de diversas áreas recomendam a nossa plataforma"
        centerTitle
        centerSubtitle
      />

      <RecommendationsList>
        {recommendations.map((recommendation) => (
          <Recommendation key={recommendation.name}>
            <header>
              <UserPhoto src={JohnDoePhoto} width={50} height={50} alt="" />

              <div>
                <strong>{recommendation.name}</strong>
                <span>{recommendation.office}</span>
              </div>
            </header>

            <p>{recommendation.text}</p>
          </Recommendation>
        ))}
      </RecommendationsList>
    </RecommendationsContainer>
  )
}
