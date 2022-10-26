import { MenuContainer, Menu, Screens, Screen } from './styles'

import Link from 'next/link'

import {
  Barbell,
  Calendar,
  Crosshair,
  ForkKnife,
  HouseSimple,
  ListChecks,
  Ruler,
  ShoppingBag,
} from 'phosphor-react'
import { Button } from '../../../../components/Button'

export function Navbar() {
  const menus = [
    {
      module: 'GERAL',
      screens: [
        {
          icon: <Ruler />,
          name: 'Medidas',
          link: '/measurements',
        },
        {
          icon: <Crosshair />,
          name: 'Metas',
          link: '/goals',
        },
        {
          icon: <ListChecks />,
          name: 'Histórico',
          link: '/calendar',
        },
      ],
    },
    {
      module: 'TREINO',
      screens: [
        {
          icon: <Barbell />,
          name: 'Meus treinos',
          link: '/trainings',
        },
        {
          icon: <Calendar />,
          name: 'Calendário',
          link: '/calendar',
        },
      ],
    },
    {
      module: 'DIETA',
      screens: [
        {
          icon: <ForkKnife />,
          name: 'Minhas dietas',
          link: '/trainings',
        },
        {
          icon: <Calendar />,
          name: 'Calendário',
          link: '/calendar',
        },
      ],
    },
  ]

  return (
    <MenuContainer>
      <Link href="/home">
        <Screen style={{ marginBottom: 32 }}>
          <HouseSimple />
          Home
        </Screen>
      </Link>

      {menus.map((menu) => (
        <Menu key={menu.module}>
          <span>{menu.module}</span>

          <Screens>
            {menu.screens.map((screen) => (
              <Link key={screen.name} href={screen.link} prefetch={false}>
                <Screen>
                  {screen.icon}
                  {screen.name}
                </Screen>
              </Link>
            ))}
          </Screens>
        </Menu>
      ))}

      <Button
        icon={<ShoppingBag size={20} weight="fill" />}
        title="Acessar loja"
        variant="secondary"
      />
    </MenuContainer>
  )
}
