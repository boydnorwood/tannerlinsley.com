import React from 'react'
import Link from 'next/Link'

import { Header, ThemeToggle } from 'components/Styles'

export default function _Header({ onToggleDark }) {
  return (
    <Header>
      <Link href="/">
        <a className="logo">tannerlinsley</a>
      </Link>
      <ThemeToggle onClick={onToggleDark} />
    </Header>
  )
}
