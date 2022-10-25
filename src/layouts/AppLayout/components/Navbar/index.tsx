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
} from 'phosphor-react'

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
          link: '/calendar',
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
              <Link key={screen.name} href={screen.link}>
                <Screen>
                  {screen.icon}
                  {screen.name}
                </Screen>
              </Link>
            ))}
          </Screens>
        </Menu>
      ))}
    </MenuContainer>
  )
}
