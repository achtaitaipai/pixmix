import { GlobalProvider } from '@ladle/react'
import React from 'react'
import '@fontsource/press-start-2p'
import '../src/index.css'

export const Provider: GlobalProvider = ({ children, globalState }) => (
	<>{children}</>
)
