type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  return <time dateTime={dateString} className="text-sm">{dateString}</time>
}

export default DateFormatter
