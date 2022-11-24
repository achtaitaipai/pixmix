import { useAtom } from 'jotai'
import {
	bgColorAtom,
	bodyColorAtom,
	mirrorXAtom,
	mirrorYAtom,
	strokeColorAtom,
} from '../../lib/store/settings'
import style from './style.module.css'

function SettingsForm() {
	const [mirrorX, setMirrorX] = useAtom(mirrorXAtom)
	const [mirrorY, setMirrorY] = useAtom(mirrorYAtom)
	const [bodyColor, setBodyColor] = useAtom(bodyColorAtom)
	const [strokeColor, setStrokeColor] = useAtom(strokeColorAtom)
	const [bgColor, setBgColor] = useAtom(bgColorAtom)
	return (
		<form className={style.form}>
			<label htmlFor="mirrorX">
				MirrorX :
				<input
					type="checkbox"
					name="mirrorX"
					id="mirrorX"
					checked={mirrorX}
					onChange={() => setMirrorX(!mirrorX)}
				/>
			</label>
			<label htmlFor="mirrorY">
				Mirror Y
				<input
					type="checkbox"
					name="mirrorY"
					id="mirrorY"
					checked={mirrorY}
					onChange={() => setMirrorY(!mirrorY)}
				/>
			</label>
			<label htmlFor="bodyColor">
				Body color :
				<input
					type="color"
					name="bodyColor"
					id="bodyColor"
					value={bodyColor}
					onChange={(e) => {
						setBodyColor(e.currentTarget.value)
					}}
				/>
			</label>
			<label htmlFor="strokeColor">
				Stroke color :
				<input
					type="color"
					name="strokeColor"
					id="strokeColor"
					value={strokeColor}
					onChange={(e) => {
						setStrokeColor(e.currentTarget.value)
					}}
				/>
			</label>
			<label htmlFor="bgColor">
				Background color :
				<input
					type="color"
					name="bgColor"
					id="bgColor"
					value={bgColor}
					onChange={(e) => {
						setBgColor(e.currentTarget.value)
					}}
				/>
			</label>
		</form>
	)
}

export default SettingsForm
