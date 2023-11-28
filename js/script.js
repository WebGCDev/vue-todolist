const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        {
          text: 'Recap Vue con Paolo Duzioni ore 16.00',
          done: false,
        },
        {
          text: 'Finire esercizio Vue To Do List',
          done: false,
        },
        {
          text: 'Seguire Masterclass dedicata al mondo del 3D applicato al Web Development',
          done: false,
        },
        {
          text: 'Andare in palestra',
          done: false,
        },
        {
          text: 'Fare la spesa',
          done: false,
        },
        {
          text: 'Questa sera dobbiamo vincere! Tifare Milan ore 21.00, questa sera S.Siro sarà una bolgia!',
          done: false,
        },
      ],
    };
  },
}).mount('#app');
