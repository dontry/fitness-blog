import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from 'components/Nav'
import Banner from 'components/Banner'
import bgImage from 'assets/images/photo-copy-2_2019-08-20/photo-copy-2.jpg'


storiesOf('Button', module)
  .add('with title', () => <Nav title="article"  />)

storiesOf("Banner", module)
  .add("blank",() => <Banner />)
  .add("with background image",() => <Banner bgImage={bgImage}/>)
