new Vue({
    el:'#app',
    data:{
        playerHealth: 100,
        monsterHealth:100,
        gameIsrunning: false,
        turns: []
    },
    methods:{
        startGame: function () {
            this.gameIsrunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text:'你對怪獸造成 ' + damage +' 的傷害'
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10,20)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text:'你對怪獸造成特別的 ' + damage +' 的傷害'
            });
            if(this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            if(this.playerHealth <= 90){
                this.playerHealth += 10
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text:'你已經恢復10點生命'
            });
            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsrunning = false;
        },
        monsterAttacks: function () {
            var damage = this.calculateDamage(5,12)
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text:'怪獸對你造成 ' + damage +' 的傷害'
            });
            this.checkWin();
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