import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from 'components/Nav'
import Banner from 'components/Banner'
import Heading from 'components/Article/Heading'
import bgImage from 'assets/images/photo-copy-2_2019-08-20/photo-copy-2.jpg'


const author = {
          "name": "Centr Team",
          "imageList": {
            "square1x": {
              "url": "https://cdn.centr.com/content/5000/4738/images/square1x-cen-author-pic-the-expertsv2.jpg"
            },
            "square2x": {
              "url": "https://cdn.centr.com/content/5000/4738/images/square2x-cen-author-pic-the-expertsv2.jpg"
            },
            "square3x": {
              "url": "https://cdn.centr.com/content/5000/4738/images/square3x-cen-author-pic-the-expertsv2.jpg"
            }
          }
        }

storiesOf('Button', module)
  .add('with title', () => <Nav title="article"  />)

storiesOf("Banner", module)
  .add("with bgImage",() => <Banner bgImage={bgImage} />)
  .add("with heading & background image", () => <Banner bgImage={bgImage}><Heading title="the breakfast collection that you get into this spring" subtitle="health & well being"/></Banner>)
  .add("with  heading, author, & background image", () => <Banner bgImage={bgImage}><Heading title="the breakfast collection that you get into this spring" subtitle="health & well being" author={author} date="24 January 2018"/></Banner>)
