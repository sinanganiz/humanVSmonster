new Vue({
  el: "#app",
  data: {
    gameStatus: false,
    specialAttack: 3,
    healthVaccine: 1,
    human: {
      attack: 0,
      health: 100,
    },
    monster: {
      attack: 0,
      health: 100,
    },
    rounds: [],
  },
  methods: {
    lostGame: function () {
      this.gameStatus = false;
      $("#loseModal").modal();
      this.gameStatus = false;
      this.specialAttack = 3;
      this.healthVaccine = 1;
      this.human = {
        attack: 0,
        health: 100,
      };
      this.monster = {
        attack: 0,
        health: 100,
      };
      this.rounds = [];
    },
    winGame: function () {
      this.gameStatus = false;
      $("#victoryModal").modal();
      this.gameStatus = false;
      this.specialAttack = 3;
      this.healthVaccine = 1;
      this.human = {
        attack: 0,
        health: 100,
      };
      this.monster = {
        attack: 0,
        health: 100,
      };
      this.rounds = [];
    },
    scoreless: function () {
      this.gameStatus = false;
      $("#scorelessModal").modal();
      this.gameStatus = false;
      this.specialAttack = 3;
      this.healthVaccine = 1;
      this.human = {
        attack: 0,
        health: 100,
      };
      this.monster = {
        attack: 0,
        health: 100,
      };
      this.rounds = [];
    },
    attackRound: function (type) {
      let humanValue, monsterValue;
      switch (type) {
        case 0:
          humanValue = Math.floor(Math.random() * 11 + 6);
          monsterValue = Math.floor(Math.random() * 11 + 7);
          this.rounds.push({
            humanRoundType: 0,
            humanTypeValue: humanValue,
            monsterAttackValue: monsterValue,
          });
          this.human.attack += humanValue;
          this.monster.attack += monsterValue;

          this.human.health = 100 - this.monster.attack;
          this.monster.health = 100 - this.human.attack;

          break;
        case 1:
          this.specialAttack--;
          humanValue = Math.floor(Math.random() * 11 + 10);
          monsterValue = Math.floor(Math.random() * 11 + 7);
          this.rounds.push({
            humanRoundType: 1,
            humanTypeValue: humanValue,
            monsterAttackValue: monsterValue,
          });
          this.human.attack += humanValue;
          this.monster.attack += monsterValue;

          this.human.health = 100 - this.monster.attack;
          this.monster.health = 100 - this.human.attack;

          break;

        case 2:
          this.healthVaccine--;
          humanValue = Math.floor(Math.random() * 14 + 7);
          monsterValue = Math.floor(Math.random() * 11 + 7);
          this.rounds.push({
            humanRoundType: 2,
            humanTypeValue: humanValue,
            monsterAttackValue: monsterValue,
          });
          this.monster.attack += monsterValue;
          this.human.health = 100 + humanValue - this.monster.attack;
          if(this.human.health>100) this.human.health=100;
          break;
        case 3:
          if (confirm("Do you want to surrender?")) {
            this.lostGame();
          }

          break;
      }
      if ((this.human.health < this.monster.health)&&this.human.health<0) {
        this.lostGame();
      } else if((this.monster.health<this.human.health)&&this.monster.health<0 ){
        this.winGame();
      } else if((this.monster.health===this.human.health)&&this.monster.health<=0){
        this.scoreless();
      }
    },
  },
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
