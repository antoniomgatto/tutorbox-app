import moment from 'moment'

const convertTypeToFormat = type => {
  let format
  switch(type) {
    case 'date':
      format = 'DD/MM/YY'
    break
    case 'datetime':
      format = 'DD/MM/YY [às] HH:mm[h]'
      break
    default:
      throw Error('Invalid format type')
  }
  return format
}

const formatDate = (date, type = 'date') => {
  const format = convertTypeToFormat(type)
  return moment(date).format(format)
}

export default formatDate
