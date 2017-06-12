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

        document
            .querySelector(selectors.svrSelector)
            .addEventListener('submit', this.addServer.bind(this))

        this.serversLoad()
    },

    help() {
        alert('You can join a server and send messages')
    },

    addServer(ev) {
        ev.preventDefault()

        const f = ev.target

        const server = {
            id: this.max,
            name: f.message.value
        }

        console.log('server : ' + server)

        f.reset()

        this.serversLoad()
    },

    serversLoad() {
        for (let i = 0; i < svrList.length; i++) {
            const item = document.createElement('li')
            item.textContent = svrList[i].name
        }
    },

    messagesLoad() {

    },

    sendMsg(ev) {
        ev.preventDefault()

        const f = ev.target
        const msg = document.createElement('li')
        msg.textContent = f.message.value

        const list = document.querySelector('#msgList')
        console.log(msg)
        list.appendChild(msg)

        f.reset()
    },
}

app.init({
    formSelector: '#msgForm',
    svrSelector: '#svrList',
})