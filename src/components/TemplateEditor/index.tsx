import { useState } from 'react'
import PixelsValues from '../../lib/sprite/PixelValues'
import SettingsForm from '../SettingsForm'
import Canvas from './Canvas'
import InputCursor from './InputCursor'
import style from './templateEditor.module.css'

const colors: Record<string, string> = {
	[PixelsValues.EMPTY]: 'white',
	[PixelsValues.BORDER]: '#171717',
	[PixelsValues.RANDOMBORDER]: '#4d4d4d',
	[PixelsValues.BODY]: '#341711',
	[PixelsValues.RANDOMBODY]: '#ca3214',
}

function TemplateEditor() {
	const [cursorValue, setCursorValue] = useState('-')
	return (
		<div className={style.wrapper}>
			<Canvas colors={colors} cursorValue={cursorValue} />
			<InputCursor colors={colors} setCursorValue={setCursorValue} />
		</div>
	)
}

export default TemplateEditor
