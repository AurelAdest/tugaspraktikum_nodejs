//pemanggilan pustaka yg tlh diinstal untuk dihubungkan
const express = require("express")//memanggil library express js
const bodyParser = require("body-Parser")//memanggil library body-parser
const cors = require("cors")//memanggil cors
const app = express()

app.use(bodyParser.json())//body-parser untuk ekstrak data request berformat json
app.use(bodyParser.urlencoded({ extended: true }))//untuk ekstrak data request dari body
app.use(cors())//penggunaan cors agar end point dapat diakses oleh cross platform

app.get("/test", (req, res) => {//endpoint dgn method GET
    //req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    let response = {//membuat objek yang berisi data yang akan dijadikan response
        message: "Ini end-point pertama",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)// memberikan response dengan format JSON yang berisi objek di atas
})

app.listen(8000, () => {// menjalankan server pada port 8000
    console.log("Server run on port 8000")
})



//<.....NOMER 1.....>//

// end-point "convert" dengan method POST
app.post("/balok", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luas_permukaan = panjang * lebar
    let volume = panjang * lebar * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "convert" dengan method POST
app.post("/kubus", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai panjang dari body

    let luas_permukaan = sisi * sisi
    let volume = sisi * sisi * sisi


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "convert" dengan method POST
app.post("/bola", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari_jari = Number(req.body.jari_jari)// mengambil nilai panjang dari body

    let luas_permukaan = 4 * 22 / 7 * jari_jari * jari_jari
    let volume = 4 / 3 * 22 / 7 * jari_jari * jari_jari * jari_jari

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari_jari: jari_jari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "convert" dengan method POST
app.post("/tabung", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari_jari = Number(req.body.jari_jari)
    let tinggi = Number(req.body.tinggi)

    let luas_permukaan = 2 * 22 / 7 * jari_jari * (jari_jari + tinggi)
    let volume = 22 / 7 * jari_jari * jari_jari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari_jari: jari_jari,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})



//<.....NOMER 2.....>//

// end-point "convert" dengan method POST
app.post("/convert/celcius", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let celcius = Number(req.body.Number) // mengambil nilai panjang dari body

    let fahrenheit = (9 / 5) * celcius + 32
    let kelvin = celcius + 273.15
    let reamur = (4 / 5) * celcius


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius: celcius,
        result: {
            fahrenheit: fahrenheit,
            kelvin: kelvin,
            reamur: reamur
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "convert" dengan method POST
app.post("/convert/reamur", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let reamur = Number(req.body.Number) // mengambil nilai panjang dari body

    let fahrenheit = 9 / 4 * reamur + 32
    let kelvin = 5 / 4 * reamur + 273
    let celcius = 5 / 4 * reamur


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        reamur: reamur,
        result: {
            fahrenheit: fahrenheit,
            kelvin: kelvin,
            celcius: celcius,
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "convert" dengan method POST
app.post("/convert/kelvin", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let kelvin = Number(req.body.Number) // mengambil nilai panjang dari body

    let fahrenheit = (kelvin - 9 / 5) - 459
    let celcius = kelvin - 273
    let reamur = 4 / 5 * (kelvin - 273)


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        kelvin: kelvin,
        result: {
            fahrenheit: fahrenheit,
            reamur: reamur,
            celcius: celcius,
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "convert" dengan method POST
app.post("/convert/fahrenheit", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let fahrenheit = Number(req.body.Number) // mengambil nilai panjang dari body

    let kelvin = (fahrenheit + 459.67) * 5 / 9
    let celcius = (fahrenheit - 32) * 5 / 9
    let reamur = 4 / 9 * (fahrenheit - 32)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        fahrenheit: fahrenheit,
        result: {
            kelvin: kelvin,
            reamur: reamur,
            celcius: celcius,
        }
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})



//<.....NOMER 3.....>//

app.post("/bilangan_desimal", (req, res) => {
    let angka = Number(req.body.angka)
    let biner = angka.toString(2)
    let octal = angka.toString(8)
    let hexadecimal = angka.toString(16)
    let response = {
        decimal: angka,
        result: {
            biner: biner,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/bilangan_biner", (req, res) => {
    let angka = req.body.angka
    let decimal = parseInt(angka, 2)
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)
    let response = {
        decimal: angka,
        result: {
            decimal: decimal,
            octal: octal,
            hexadecimal: hexadecimal
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/bilangan_octal", (req, res) => {
    let angka = req.body.angka
    let decimal = parseInt(angka, 8)
    let biner = decimal.toString(2)
    let hexadecimal = decimal.toString(16)
    let response = {
        octal: angka,
        result: {
            decimal: decimal,
            biner: biner,
            hexadecimal: hexadecimal
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

app.post("/bilangan_hexadesimal", (req, res) => {
    let angka = req.body.angka
    let decimal = parseInt(angka, 16)
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let response = {
        hexadecimal: angka,
        result: {
            decimal: decimal,
            octal: octal,
            biner: biner
        }
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})



//<.....NOMER 4.....>//

app.post("/bmi", (req, res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let BMI = berat / (tinggi * tinggi)
    let status

    if (BMI < 18.5) {
        status = "kekurangan berat badan"
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        status = "Normal (ideal)"
    } else if (BMI >= 25.0 && BMI <= 29.9) {
        status = "kelebihan berat badan"
    } else {
        status = "kegemukan (obesitas)"
    }


    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        berat: berat,
        tinggi: tinggi,
        BMI: BMI,
        status: status
    }


    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})