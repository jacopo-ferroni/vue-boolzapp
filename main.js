console.log(Vue);

const app = new Vue({
    el : `#app`,
    data : {
        io : {
            name: `Doctor Jacopo Ferroni`,
            avatar: `./assets-boolzapp/img/jacopoMontagna.JPG`,
            name1: `Jacopo`,
            surname1: `Ferroni`,
            role: `Doctor`,
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },	{
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        array: [`va bene`,`ok`,`certo`,`non lo so`,`probabilmente`,`forse`,`wuuf`,`direttamente dall'NCC maggggico`,`ho spacato tutto fratellì`,`Tu non sei Jacopo il Ginecologo?`],

        activeUser : 0,

        message : ``,

        name : ``,

        info : 0,

        nClick : 1,

        close : 0,

        close1 : 0,
    },

    methods : {
        selectContact(indice) {
            this.activeUser = indice;
        },

        sendMessage () {
            console.log(this.message);

            this.contacts[this.activeUser].messages.push({
                date: dayjs().format(`DD/MM/YYYY HH:mm:ss`),
                text : this.message,
                status : `sent`,
            });

            setTimeout(this.createchat, 1000);

            this.message = ``;

        },

        createchat () {
            
            this.contacts[this.activeUser].messages.push({
                date : dayjs().format(`DD/MM/YYYY HH:mm:ss`),
                text : `ok`,
                status : `received`,
            });
        },

        ricerca () {
            console.log(this.name);

            for(let i = 0; i < this.contacts.length; i++) {

                if(this.contacts[i].name.toLowerCase().includes(this.name.toLowerCase())) {
                    this.contacts[i].visible = true;
                }
                else {
                    this.contacts[i].visible = false;
                }

            }
        },

        infos (indice) {
            this.nClick++;
            this.info = indice
        },

        showInfo () {
            this.close = 1;
            this.nClick++;
        },

        closeInfo () {
            this.close = 0;
            this.nClick++;
        },

        deleteMess (indice) {
            this.contacts[this.activeUser].messages.splice(indice, 1);
            this.nClick++;
        },

        showUser () {
            this.close1 = 1;
        },

        closeUser () {
            this.close1 = 0;
        },
    }
});