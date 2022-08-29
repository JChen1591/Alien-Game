//Bullets
    //factory method
function Bullet (speed, damage) {
    return {
        speed,
        damage,
        getDetails: function() {
            return `${this.speed}, ${this.damage}`;
        },
    };
} 


// //constructor function
// function Bullet (speed,damage) {
//     this.speed;
//     this.damage;
//     this.getDetails = function() {
//         return `${this.speed},${this.damage}`;
//     };
// }

// //class Bullet
// class Bullet {
//     constructor(speed, damage) {
//         this.speed;
//         this.damage;
//     }
//     getDetails(){
//         return `${this.speed},${this.damage}`;
//     }
// }

//Ship
//factory function
function ship(HP, Speed,) {
    return {
        HP,
        Speed,
        fireBullet(){
            return Bullet(1,1)
            }
        };
    } 
    const test = ship()
    console.log(test.fireBullet())
//constructor function
//function ship(100, 10, bullet1);