import { useAtom } from 'jotai'
import useDebounce from '../../lib/hooks/useDebounce'
import {
	bgColorAtom,
	bodyColorAtom,
	mirrorXAtom,
	mirrorYAtom,
	strokeColorAtom,
} from '../../lib/store/settings'
import CheckBox from '../CheckBox'
import style from './style.module.css'

function SettingsForm() {
	const [mirrorX, setMirrorX] = useAtom(mirrorXAtom)
	const [mirrorY, setMirrorY] = useAtom(mirrorYAtom)
	const [bodyColor, setBodyColor] = useAtom(bodyColorAtom)
	const setBody = useDebounce(bodyColor, setBodyColor, 500)
	const [strokeColor, setStrokeColor] = useAtom(strokeColorAtom)
	const setStroke = useDebounce(strokeColor, setStrokeColor, 500)
	const [bgColor, setBgColor] = useAtom(bgColorAtom)
	const setBg = useDebounce(bgColor, setBgColor, 500)
	return (
		<form className={style.form}>
			<CheckBox
				label="MirrorX"
				checked={mirrorX}
				onChange={() => setMirrorX(!mirrorX)}
			/>
			<CheckBox
				label="MirrorY"
				checked={mirrorY}
				onChange={() => setMirrorY(!mirrorY)}
			/>
			<label htmlFor="bodyColor">
				<input
					type="color"
					name="bodyColor"
					id="bodyColor"
					value={bodyColor}
					onChange={(e) => {
						setBody(e.currentTarget.value)
					}}
				/>
				Body color
			</label>
			<label htmlFor="strokeColor">
				<input
					type="color"
					name="strokeColor"
					id="strokeColor"
					value={strokeColor}
					onChange={(e) => {
						setStroke(e.currentTarget.value)
					}}
				/>
				Border color
			</label>
			<label htmlFor="bgColor">
				<input
					type="color"
					name="bgColor"
					id="bgColor"
					value={bgColor}
					onChange={(e) => {
						setBg(e.currentTarget.value)
					}}
				/>
				Bg color
			</label>
		</form>
	)
}

export default SettingsForm
