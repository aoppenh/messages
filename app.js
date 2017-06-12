const app = {
    init(selectors) {
        this.msgList = []
        this.svrList = []
        this.mE = true
        this.sE = true

        document.querySelector('#help').setAttribute('onClick', 'app.help()')

        document.getElementById('help').setAttribute('class', 'fa fa-info-circle')
        document.getElementById('send').setAttribute('class', 'fa fa-reply')
        document.getElementById('join').setAttribute('class', 'fa fa-sign-in')

        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.sendMsg.bind(this))

        this.serversLoad()

    },

    help() {
        alert('You can join a server and send messages')
    },

    serversLoad() {

    },

    messagesLoad() {

    },

    sendMsg(ev) {
        ev.preventDefault()


    },
}

app.init({
    formSelector: '#msgForm',
    msgSelector: '#msgList',
    svrSelector: '#svrList',
})