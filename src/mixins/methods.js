export default  {
    methods: {
        pop: function() {
           let code = window.prompt("Enter the provided code from the bot");
           fetch("/")
        }
    }
}