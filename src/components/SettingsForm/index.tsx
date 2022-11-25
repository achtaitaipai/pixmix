import { useAtom } from 'jotai'
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
	const [strokeColor, setStrokeColor] = useAtom(strokeColorAtom)
	const [bgColor, setBgColor] = useAtom(bgColorAtom)
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
						setBodyColor(e.currentTarget.value)
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
						setStrokeColor(e.currentTarget.value)
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
						setBgColor(e.currentTarget.value)
					}}
				/>
				Bg color
			</label>
		</form>
	)
}

export default SettingsForm
