import axios from 'axios'

class pokemon {
    getPokemon() {
        return axios({
            url: "https://admin.quare.vn/smartapi/jsoncity",
            method: "POST",
            headers: {
                'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }
    getMomo(){
        return axios({
            url:`https://test-payment.momo.vn/gw_payment/transactionProcessor`
        })
    }
}
export default pokemon