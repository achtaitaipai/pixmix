import { FormEvent } from 'react'
import cssVariables from '../../helpers/cssVariables'
import PixelsValues from '../../lib/sprite/PixelValues'
import style from './templateEditor.module.css'

interface InputCursorProps {
	colors: Record<string, string>
	setCursorValue: React.Dispatch<React.SetStateAction<string>>
}

function InputCursor({ colors, setCursorValue }: InputCursorProps) {
	function handleChange(e: FormEvent<HTMLDivElement>) {
		const element = e.currentTarget
		const value =
			element?.querySelector<HTMLInputElement>('input:checked')?.value
		if (!value) return
		setCursorValue(value)
	}
	return (
		<div className={style.inputCursor} onChange={(e) => handleChange(e)}>
			<input
				radioGroup="cursor"
				type="radio"
				name="cursor"
				id="empty"
				value={PixelsValues.EMPTY}
			/>
			<label
				htmlFor="empty"
				style={cssVariables({ '--bg': colors[PixelsValues.EMPTY] })}
			>
				Empty
			</label>
			<input
				radioGroup="cursor"
				type="radio"
				name="cursor"
				id="border"
				value={PixelsValues.BORDER}
			/>
			<label
				htmlFor="border"
				style={cssVariables({ '--bg': colors[PixelsValues.BORDER] })}
			>
				Border
			</label>
			<input
				radioGroup="cursor"
				type="radio"
				name="cursor"
				id="body"
				value={PixelsValues.BODY}
				defaultChecked
			/>
			<label
				htmlFor="body"
				style={cssVariables({ '--bg': colors[PixelsValues.BODY] })}
			>
				Body
			</label>
			<input
				radioGroup="cursor"
				type="radio"
				name="cursor"
				id="random border"
				value={PixelsValues.RANDOMBORDER}
			/>
			<label
				htmlFor="random border"
				style={cssVariables({ '--bg': colors[PixelsValues.RANDOMBORDER] })}
			>
				Random border
			</label>
			<input
				radioGroup="cursor"
				type="radio"
				name="cursor"
				id="random body"
				value={PixelsValues.RANDOMBODY}
			/>
			<label
				htmlFor="random body"
				style={cssVariables({ '--bg': colors[PixelsValues.RANDOMBODY] })}
			>
				Random body
			</label>
		</div>
	)
}

export default InputCursor
