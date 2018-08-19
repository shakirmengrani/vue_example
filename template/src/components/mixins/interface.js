import firebase from 'firebase'
export default {
    methods: {
        sendMail: function sendMail(data) {
            return this.$http.post("mail", data);
        }
    }
}