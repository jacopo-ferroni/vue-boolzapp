console.log(Vue);

const app = new Vue({
    el : `#app`,
    data : {
        io : {
            name: `Doctor Jacopo Ferroni`,
            avatar: `./assets-boolzapp/img/jacopoMontagna.JPG`,
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
        
    },

    methods : {
        selectContact(indice) {
            this.activeUser = indice;
        },

        sendMessage () {
            console.log(this.message);

            this.contacts[this.activeUser].messages.push({
                date: '10/01/2020 15:30:55',
                text : this.message,
                status : `sent`,
            });

            setTimeout(this.createchat, 1000);

            this.message = ``;

        },

        random () {

            console.log(this.array.lenght);

           const random = Math.floor(Math.random() * this.array.lenght - 1);

           console.log(random);
    
           return random;
        },

        createchat () {
            
            console.log(this.array[this.random]);
            
            this.contacts[this.activeUser].messages.push({
                date: '10/01/2020 15:30:55',
                text : `ok`,
                status : `received`,
            });
        },

    }
});