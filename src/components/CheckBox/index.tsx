import style from './style.module.css'

interface CheckBoxProps {
	label: string
	checked?: boolean
	onChange?: () => void
}

function CheckBox({ label, ...props }: CheckBoxProps) {
	return (
		<label htmlFor={label} className={style.label}>
			<input type="checkbox" {...props} className={style.checkbox} id={label} />
			<span className={style.span}>{label}</span>
		</label>
	)
}

export default CheckBox
