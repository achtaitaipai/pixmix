import { useAtom } from 'jotai'
import {
	heightAtom,
	insertColumnAtom,
	insertRowAtom,
	removeColumnAtom,
	removeRowAtom,
	widthAtom,
} from '../../../lib/store/template'
import style from './style.module.css'

function SizeEditor() {
	const [, insertColumn] = useAtom(insertColumnAtom)
	const [, removeColumn] = useAtom(removeColumnAtom)
	const [, insertRow] = useAtom(insertRowAtom)
	const [, removeRow] = useAtom(removeRowAtom)
	const [width] = useAtom(widthAtom)
	const [height] = useAtom(heightAtom)
	return (
		<>
			<div className={style.colBtn}>
				<button
					title="insert column at begin"
					type="button"
					onClick={() => insertColumn(0)}
				>
					+
				</button>
				<button
					title="remove first column"
					type="button"
					onClick={() => removeColumn(0)}
				>
					-
				</button>
			</div>
			<div className={style.colBtn}>
				<button
					title="insert column at end"
					type="button"
					onClick={() => insertColumn(width)}
				>
					+
				</button>
				<button
					title="remove last column"
					type="button"
					onClick={() => removeColumn(width - 1)}
				>
					-
				</button>
			</div>
			<div className={style.rowBtn}>
				<button
					title="insert row at begin"
					type="button"
					onClick={() => {
						insertRow(0)
					}}
				>
					+
				</button>
				<button
					title="remove first row"
					type="button"
					onClick={() => {
						removeRow(0)
					}}
				>
					-
				</button>
			</div>
			<div className={style.rowBtn}>
				<button
					title="insert row at end"
					type="button"
					onClick={() => {
						insertRow(height)
					}}
				>
					+
				</button>
				<button
					title="remove last row"
					type="button"
					onClick={() => {
						removeRow(height - 1)
						// setHeight((h) => h - 1)
					}}
				>
					-
				</button>
			</div>
		</>
	)
}

export default SizeEditor
