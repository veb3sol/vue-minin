Vue.createApp({
    data: () => ({
        title: 'Заголовок',
        myHtml: '<h2>Заголовок 2</h2>',
        person: {
            firstName: 'Ruslan',
            lastName: 'Ruzh',
            age: 43
        },
        num: [1,2,3,4,5,6]
    })
}).mount('#app');