
// App - тут мы настраиваем свое приложение
const App = {
    data(){                 // вернет обьект с данными, которые видны в шаблоне
        return {
            plx: "Введите текст",
            title: "Добавь событие",
            inputValue: '',
            note: ['Заметка1', 'Заметка2']
        }
    },
    methods: {
        inputChengeHandler(event){
            console.log(event.target.value)
            this.inputValue = event.target.value
        },
        addNewNote(){
            if(this.inputValue !== ''){
                this.note.push(this.inputValue)
            }
        },
        removeNote(idx){
            this.note.splice(idx, 1)
        },
        toUpperCase(s){
            return s.toUpperCase()
        },
       
    },
    computed: {
        doubleNumComputed(){
            return this.note.length * 2
        }, 
    },
    watch: {
        inputValue(value){
            if(value.length >= 10){
                this.inputValue = ''
            }
            console.log(value)
        }
    }

}

// создаем App
//const app = Vue.createApp(App)

// 1 способ инициализации этого приложения в html
//app.mount('#myapp')         //где именно в коде развернуть это приложение

// 2 способ инициализации - без создания дополнительной переменной
Vue.createApp(App).mount('#myapp')