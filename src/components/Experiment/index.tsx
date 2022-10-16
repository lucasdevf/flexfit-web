import { Button } from '../Button'
import { Content, ExperimentContainer, Price } from './styles'

export function Experiment() {
  return (
    <ExperimentContainer>
      <Content>
        <h3>Experimente grátis por 14 dias</h3>

        <span>
          O melhor do nosso período de teste:{' '}
          <strong>não precisa cadastrar cartão de crédito</strong>
        </span>

        <p>
          Após finalizar o período de teste, você pode optar não dar
          continuidade no uso da plataforma ou então realizar sua assinatura que
          custa apenas
        </p>

        <Price>
          <span>
            <strong>R$ 10,90</strong> por mês
          </span>

          <Button title="Quero experimentar 14 dias grátis" />
        </Price>
      </Content>
    </ExperimentContainer>
  )
}
