const App = {
    data(){
        return {
            title: 'Список дел',
            myPlacehold: 'Введите новое значение',
            inputValue: ''
        }
    },
    methods: {
        inputFun(event){
            this.inputValue = event.target.value
        }
    }
}

// Vue.createApp(App)
const myApp = Vue.createApp(App)
myApp.mount('#myapp')