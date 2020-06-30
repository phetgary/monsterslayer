new Vue({
    el:'#app',
    data:{
        playerHealth: 100,
        monsterHealth:100,
        gameIsrunning: false
    },
    methods:{
        startGame: function () {
            this.gameIsrunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calculateDamage(3,10);
            if(this.checkWin()){
                return;
            }
            this.playerHealth -= this.calculateDamage(5,12);
            this.checkWin();
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function (){
            if(this.monsterHealth <= 0){
                if(confirm("你輸了，再來一局？")){
                    this.startGame();
                } else {
                    this.gameIsrunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0){
                if(confirm("你贏了，再來一局？")){
                    this.startGame();
                } else {
                    this.gameIsrunning = false;
                }
                return true;
            }
            return false;
        }
    }
});