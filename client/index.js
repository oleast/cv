import React from 'react'
import {render} from 'react-dom'

import CV from './components/CV'

if (typeof window !== 'undefined') {
  render(
    <CV id='cv' />,
		document.getElementById('root')
	)
}
