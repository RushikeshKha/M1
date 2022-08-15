const express = require('express')
const {
    quickSort
} = require('sort-algorithms-js');
const app = express();
const { MongoClient } = require("mongodb");
const port = 4000;
var cors = require('cors')
app.use(cors())
app.use(express.json());

const client = new MongoClient("mongodb://localhost:27017");
var nifty_cll = "nf5aug22"
var bnifty_cll = "bnf5aug22"

// Get nifty OI
var NiftyOI = (res) => {
    let time = []
    let oi = []
    async function run() {
        try {
            await client.connect();
            const db = client.db("NiftyOptionsIO")
            const cll = db.collection(nifty_cll)
            const result = await cll.find().sort({ _id: -1 }).limit(5).toArray()
            for (i = 0; i <= result.length - 1; i++) {
                time.push(result[i]['time'])
                oi.push((result[i]['data']['CE']['totOI'] + result[i]['data']['PE']['totOI']) / 1000)
            }
            //console.log(time,oi)
            res.send({ time: time, oi: oi })
        } catch (e) {
            console.log("Error: " + e);
        } finally {
            await client.close();
        }
    } run().catch(console.dir);
}

// Get Banknifty OI
var BankNiftyOI = (res) => {
    let time = []
    let oi = []
    async function run() {
        try {
            await client.connect();
            const db = client.db("NiftyOptionsIO")
            const cll = db.collection(bnifty_cll)
            const result = await cll.find().sort({ _id: -1 }).limit(5).toArray()
            for (i = 0; i <= result.length - 1; i++) {
                time.push(result[i]['time'])
                oi.push((result[i]['data']['CE']['totOI'] + result[i]['data']['PE']['totOI']) / 1000)
            }
            res.send({ time: time, oi: oi })

        } catch (e) {
            console.log("Error: " + e);
        } finally {
            await client.close();
        }
    } run().catch(console.dir);
    return ({ time: time, oi: oi })
}

//Dashboard urls

// Nifty most CE OI
var NiftyMostCeOI = (res) => {
    let oi = []
    let ooi = []
    let strike = []
    async function run() {
        try {
            await client.connect();
            const db = client.db("NiftyOptionsIO")
            const cll = db.collection(nifty_cll)
            const result = await cll.find().sort({ _id: -1 }).limit(1).toArray()
            for (i = 0; i <= 100; i++) {
                oi.push(result[0]['data']['data'][i]['CE']['openInterest'])
            }
            var a = quickSort(oi, (a, b) => b - a)
            for (i = 0; i <= 6; i++) {
                for (j = 0; j <= 100; j++) {
                    if (a[i] === result[0]['data']['data'][j]['CE']['openInterest']) {
                        //ooi.push({ strikeprice: result[0]['data']['data'][j]['CE']['strikePrice'], oi: result[0]['data']['data'][j]['CE']['openInterest'] })
                        strike.push(result[0]['data']['data'][j]['CE']['strikePrice'])
                        ooi.push(result[0]['data']['data'][j]['CE']['openInterest'] / 1000)
                        break;
                    }
                }
            }
            res.send({ time: result[0]['time'], oi: ooi, strike: strike })
            //console.log(time,oi)
            //res.send({time:time,oi:oi})
        } catch (e) {
            console.log("Error: " + e);
        } finally {
            await client.close();
        }
    } run().catch(console.dir);
}

//Nifty most PE

var NiftyMostPeOI = (res) => {
    let oi = []
    let ooi = []
    let strike = []
    async function run() {
        try {
            await client.connect();
            const db = client.db("NiftyOptionsIO")
            const cll = db.collection(nifty_cll)
            const result = await cll.find().sort({ _id: -1 }).limit(1).toArray()
            for (i = 0; i <= 100; i++) {
                oi.push(result[0]['data']['data'][i]['PE']['openInterest'])
            }
            var a = quickSort(oi, (a, b) => b - a)
            for (i = 0; i <= 6; i++) {
                for (j = 0; j <= 100; j++) {
                    if (a[i] === result[0]['data']['data'][j]['PE']['openInterest']) {
                        //ooi.push({ strikeprice: result[0]['data']['data'][j]['PE']['strikePrice'], oi: result[0]['data']['data'][j]['PE']['openInterest'] })
                        strike.push(result[0]['data']['data'][j]['PE']['strikePrice'])
                        ooi.push(result[0]['data']['data'][j]['PE']['openInterest'] / 1000)
                        break;
                    }
                }
            }
            res.send({ time: result[0]['time'], oi: ooi, strike: strike })
            //console.log(time,oi)
            //res.send({time:time,oi:oi})
        } catch (e) {
            console.log("Error: " + e);
        } finally {
            await client.close();
        }
    } run().catch(console.dir);
}

// BankNifty Most Pe Oi
var BankNiftyMostPeOI = (res) => {
    let oi = []
    let ooi = []
    let strike = []
    async function run() {
        try {
            await client.connect();
            const db = client.db("NiftyOptionsIO")
            const cll = db.collection(bnifty_cll)
            const result = await cll.find().sort({ _id: -1 }).limit(1).toArray()
            for (i = 0; i <= 100; i++) {
                oi.push(result[0]['data']['data'][i]['PE']['openInterest'])
            }
            var a = quickSort(oi, (a, b) => b - a)
            for (i = 0; i <= 6; i++) {
                for (j = 0; j <= 100; j++) {
                    if (a[i] === result[0]['data']['data'][j]['PE']['openInterest']) {
                        //ooi.push({ strikeprice: result[0]['data']['data'][j]['PE']['strikePrice'], oi: result[0]['data']['data'][j]['PE']['openInterest'] })
                        strike.push(result[0]['data']['data'][j]['PE']['strikePrice'])
                        ooi.push(result[0]['data']['data'][j]['PE']['openInterest'] / 1000)
                        break;
                    }
                }
            }

            res.send({ time: result[0]['time'], oi: ooi, strike: strike })
            //console.log(time,oi)
            //res.send({time:time,oi:oi})
        } catch (e) {
            console.log("Error: " + e);
        } finally {
            await client.close();
        }
    } run().catch(console.dir);
}
// BankNifty Most Ce Oi
var BankNiftyMostCeOI = (res) => {
    let oi = []
    let ooi = []
    let strike = []
    async function run() {
        try {
            await client.connect();
            const db = client.db("NiftyOptionsIO")
            const cll = db.collection(bnifty_cll)
            const result = await cll.find().sort({ _id: -1 }).limit(1).toArray()
            for (i = 0; i <= 100; i++) {
                oi.push(result[0]['data']['data'][i]['CE']['openInterest'])
            }
            var a = quickSort(oi, (a, b) => b - a)
            for (i = 0; i <= 6; i++) {
                for (j = 0; j <= 100; j++) {
                    if (a[i] === result[0]['data']['data'][j]['CE']['openInterest']) {
                        //ooi.push({ strikeprice: result[0]['data']['data'][j]['CE']['strikePrice'], oi: result[0]['data']['data'][j]['CE']['openInterest'] })
                        strike.push(result[0]['data']['data'][j]['CE']['strikePrice'])
                        ooi.push(result[0]['data']['data'][j]['CE']['openInterest'] / 1000)
                        break;
                    }
                }
            }
            res.send({ time: result[0]['time'], oi: ooi, strike: strike })

        } catch (e) {
            console.log("Error: " + e);
        } finally {
            await client.close();
        }
    } run().catch(console.dir);
}
app.get('/idx', (req, res) => {


    let idx_data = [
        {
            idx: "Nifty",
            price: 15000,
            pChange: 123,
            percentChng: 2
        },
        {
            idx: "BankNifty",
            price: 15000,
            pChange: 123,
            percentChng: 2
        }
    ]
    res.send('a')
});

app.get('/idxnifty', (req, res) => {
    NiftyOI(res)
});
app.get('/idxbnifty', (req, res) => {
    BankNiftyOI(res)
});

app.get('/nfceoi', (req, res) => {

    NiftyMostCeOI(res)
});

app.get('/nfpeoi', (req, res) => {

    NiftyMostPeOI(res)
});

app.get('/bnfceoi', (req, res) => {
    BankNiftyMostCeOI(res)
});

app.get('/bnfpeoi', (req, res) => {
    BankNiftyMostPeOI(res)
});

//Future OI Details

app.get('/future/chart', (req, res) => {
    let data = {
        "time": [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        "OI": [11, 22, 33, 44, 55, 66, 77, 88, 99, 00]
    }
    res.send(data)
});

app.get('/future/table', (req, res) => {
    let data = [
        {
            time: '12:12',
            oi: 231232,
            ltp: 12444,
            oiChng: 2312,
            volume: 234234,
            interpretation: "SC"
        }
    ]
    res.send(data)
});

//Option Chain

app.get('/optionchain/all', (req, res) => {
    let idx_data = [
        {
            "CE": [
                {
                    15000: 22000
                },
                {
                    15000: 22000
                },
                {
                    15000: 22000
                },
                {
                    15000: 22000
                },
                {
                    15000: 22000
                }
            ]
        },
        {
            "PE": [
                {
                    15000: 22000
                },
                {
                    15000: 22000
                },
                {
                    15000: 22000
                },
                {
                    15000: 22000
                },
                {
                    15000: 22000
                }
            ]
        }
    ]
    res.send(idx_data)
});

//Strike Analysis nifty

app.post('/strikeanalysis/Nifty', (req, res) => {

    var time = []
    var oi = []
    var data = {}
    const strikePrice = req.body.strike
    const timeCount = parseInt(req.body.timeCount)
    const action = req.body.action
    console.log(strikePrice)

    async function run() {
        try {
            await client.connect();
            const db = client.db("NiftyOptionsIO")
            const cll = db.collection(nifty_cll)
            const result = await cll.find().sort({ _id: -1 }).limit(timeCount).toArray()
            //const len = await cll.estimatedDocumentCount({})
            for(a=0;a<=strikePrice.length-1;a++){
                time = []
                oi = []
            for (i = 0; i <= timeCount - 1; i++) {
                time.push(result[i]['time'])
                for (j = 0; j <= (result[0]['data']['data'].length -1); j++) {
                    if (result[0]['data']['data'][j][action]['strikePrice'] == strikePrice[a]) {
                        oi.push(result[i]['data']['data'][j][action]['openInterest'])
                        break;
                    }
                }
            }
            data[strikePrice[a]] = {time:time,oi:oi}
            
        }

            res.send(data)
        } catch (e) {
            console.log("Error: " + e);
        } finally {
            await client.close();
        }
    } run().catch(console.dir);
});

//Strike Analysis Banknifty

app.post('/strikeanalysis/BankNifty', (req, res) => {

    var time = []
    var oi = []
    var data = {}
    const strikePrice = req.body.strike
    const timeCount = parseInt(req.body.timeCount)
    const action = req.body.action


    async function run() {
        try {
            await client.connect();
            const db = client.db("NiftyOptionsIO")
            const cll = db.collection(bnifty_cll)
            const result = await cll.find().sort({ _id: -1 }).limit(timeCount).toArray()
            const len = await cll.estimatedDocumentCount({})


            for(a=0;a<=strikePrice.length-1;a++){
                time = []
                oi = []
            for (i = 0; i <= timeCount - 1; i++) {
                time.push(result[i]['time'])
                for (j = 0; j <= (result[0]['data']['data'].length -1); j++) {
                    if (result[0]['data']['data'][j][action]['strikePrice'] == strikePrice[a]) {
                        oi.push(result[i]['data']['data'][j][action]['openInterest'])
                        break;
                    }
                }
            }
            data[strikePrice[a]] = {time:time,oi:oi}
            //console.log(data)
        }


        res.send(data)
        } catch (e) {
            console.log("Error: " + e);
        } finally {
            await client.close();
        }
    } run().catch(console.dir);
});

//Get strikes
app.get('/loadstrikes/:ticker', (req, res) => {

    var ticker = req.params.ticker
    var strikes = []

    if (ticker == "BankNifty") {
        async function run() {
            try {
                await client.connect();
                const db = client.db("NiftyOptionsIO")
                const cll = db.collection(bnifty_cll)
                const result = await cll.find().sort({ _id: -1 }).limit(1).toArray()
                const len = await cll.estimatedDocumentCount({})


                for (j = 0; j <= (result[0]['data']['data'].length -1); j++) {
                    strikes.push(result[0]['data']['data'][j]['strikePrice'])
                }


                res.send(strikes)
            } catch (e) {
                console.log("Error: " + e);
            } finally {
                await client.close();
            }
        } run().catch(console.dir);
    }
    else if (ticker == "Nifty") {
        async function run() {
            try {
                await client.connect();
                const db = client.db("NiftyOptionsIO")
                const cll = db.collection(nifty_cll)
                const result = await cll.find().sort({ _id: -1 }).limit(1).toArray()
                const len = await cll.estimatedDocumentCount({})

                for (j = 0; j <= (result[0]['data']['data'].length -1); j++) {
                    strikes.push(result[0]['data']['data'][j]['strikePrice'])
                }


                res.send(strikes)
            } catch (e) {
                console.log("Error: " + e);
            } finally {
                await client.close();
            }
        } run().catch(console.dir);
    }
});

// Tracker

app.post('/tracker',(req,res) => {
    const strikePrice = req.body.strike;
    const time = req.body.time
    const ticker = req.body.ticker
    const action = req.body.action
    var strikes = []
    if (ticker == "BankNifty") {
        async function run() {
            try {
                await client.connect();
                const db = client.db("NiftyOptionsIO")
                const cll = db.collection(bnifty_cll)
                const result = await cll.find().sort({ _id: -1 }).limit(time).toArray()
                //const len = await cll.estimatedDocumentCount({})

                for(a=0;a<=time-1;a++){
                for (j = 0; j <= (result[0]['data']['data'].length -1); j++) {
                    if (result[a]['data']['data'][j][action]['strikePrice'] == strikePrice) {
                        strikes.push({time:result[a]['time'],oi:result[a]['data']['data'][j][action]['openInterest'],price:result[a]['data']['data'][j][action]['lastPrice']})
                        break;
                    }
                }}


                res.send(strikes)
            } catch (e) {
                console.log("Error: " + e);
            } finally {
                await client.close();
            }
        } run().catch(console.dir);
    }
    else if (ticker == "Nifty") {
        async function run() {
            try {
                await client.connect();
                const db = client.db("NiftyOptionsIO")
                const cll = db.collection(nifty_cll)
                const result = await cll.find().sort({ _id: -1 }).limit(time).toArray()
                //const len = await cll.estimatedDocumentCount({})

                for(a=0;a<=time-1;a++){
                    for (j = 0; j <= (result[0]['data']['data'].length -1); j++) {
                        if (result[a]['data']['data'][j][action]['strikePrice'] == strikePrice) {
                            strikes.push({time:result[a]['time'],oi:result[a]['data']['data'][j][action]['openInterest'],price:result[a]['data']['data'][j][action]['lastPrice']})
                            break;
                        }
                    }}


                res.send(strikes)
            } catch (e) {
                console.log("Error: " + e);
            } finally {
                await client.close();
            }
        } run().catch(console.dir);
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
