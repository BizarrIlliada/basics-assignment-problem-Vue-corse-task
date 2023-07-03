const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      timeOutCounter: 0,
    }
  },

  methods: {
    add(num) {
      this.counter += num;
      console.log(this.counter);
    }
  },

  computed: {
    result() {
      const { counter } = this;

      switch (true) {
        case counter < 37:
          return 'Not there yet!';
        case counter === 37:
          return 'Bravo!!!';
        case counter > 37:
          return 'Too much!';
      }
    }
  },

  watch: {
    result() {
      setTimeout(() => {
        this.timeOutCounter++;
        console.log('Timeout counter ' + this.timeOutCounter);
        this.counter = 0;
      }, 5000)
    }
  }
})

app.mount('#assignment')