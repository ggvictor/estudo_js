const div_data = document.getElementById("div_data")
const data = new Date()

let dia_m = data.getDate()
dia_m = dia_m < 10 ? "0" + dia_m: dia_m

let mes = data.getMonth() + 1
mes = mes < 10 ? "0" + mes: mes


const data_s = dia_m + "/" +  mes + "/" + data.getFullYear()



div_data.innerHTML = data_s

// console.log(Date.now()) // timestamp
console.log(data)
console.log(data_s)
console.log(data.toDateString())
console.log(data.getTime())
console.log(`Dia do Mês: ${data.getDate()}`)
console.log(data.getMonth())