import { Check } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CheckboxContainer, CheckboxRoot, CheckboxIndicator } from './styles'

interface Props {
  label: string
  checked: boolean
  onCheck: () => void
}

export function Checkbox({ label, checked, onCheck }: Props) {
  const theme = useTheme()

  return (
    <CheckboxContainer>
      <CheckboxRoot checked={checked} onCheckedChange={onCheck}>
        <CheckboxIndicator>
          <Check color={theme['purple-500']} weight="bold" />
        </CheckboxIndicator>
      </CheckboxRoot>

      {label}
    </CheckboxContainer>
  )
}
