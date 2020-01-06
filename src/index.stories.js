import React from 'react'
import { storiesOf } from '@storybook/react'

import { DualRing, Ellipsis, Ring } from './'

storiesOf('Spinners', module)
  .add('DualRing', () => <DualRing />)
  .add('Ellipsis ', () => <Ellipsis />)
  .add('Ring ', () => <Ring />)
