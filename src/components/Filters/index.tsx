import { Filter, FiltersContainer } from './styles'

interface Props {
  filters: string[]
  filterActive: string
  onFilter: (filter: string) => void
}

export function Filters({ filters, filterActive, onFilter }: Props) {
  return (
    <FiltersContainer>
      {filters.map((filter) => (
        <Filter
          key={filter}
          active={filter === filterActive}
          onClick={() => onFilter(filter)}
        >
          {filter}
        </Filter>
      ))}
    </FiltersContainer>
  )
}
