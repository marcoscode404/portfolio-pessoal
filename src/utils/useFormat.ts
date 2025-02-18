import moment from 'moment'

export default {
   asMonetary(value: number | string) {
      if (value == null) return value

      let numericaValue = value;

      if (typeof value == 'string'){
         numericaValue = parseFloat(value)
         if (isNaN(numericaValue)) {
            return value
         }
      }

      return numericaValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
   },
   asDate(value: string) {
      const m = moment(String(value), moment.ISO_8601)
      if (m.isValid()) {
         return m.format('DD/MM/yyyy')
      }
      else {
         return value
      }
   },
   asDateTime(value: string) {
      const m = moment(String(value), moment.ISO_8601)
      if (m.isValid()) {
         return m.format('DD/MM/yyyy [às] HH:mm:ss')
      }
      else {
         return value
      }
   },
   asDateTimeToCsv(value: string) {
      const m = moment(String(value))
      if (m.isValid()) {
         return m.format('DD/MM/yyyy HH:mm:ss')
      }
      else {
         return value
      }
   },
   dayAndMonth(value: string) {
      const m = moment(String(value))
      if (m.isValid()) {
         return m.format('DD/MM')
      }
      else {
         return value
      }
   },
   exchangeForComma(value: string) {
      return value.replace('.', ',')
   }
}