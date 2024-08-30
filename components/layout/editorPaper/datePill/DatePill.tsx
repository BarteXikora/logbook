import style from './datePill.module.scss'

const DatePill = ({ date }: { date: string }) => {
    return (
        <div className={style.datePillContainer}>
            <div className={style.datePill}>{date}</div>
        </div>
    )
}

export default DatePill