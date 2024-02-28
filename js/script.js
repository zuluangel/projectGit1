
let bills = [500, 1000, 5000, 10000, 20000, 30000];

let money = (bills[0]*100000) + (bills[1]*50000) + (bills[2]*20000) + 
(bills[3]*10000) + (bills[4]*5000) + (bills[5]*2000);

let b100 = 0;
let b50 = 0;
let b20 = 0;
let b10 = 0;
let b5 = 0;
let b2 = 0;

let asker = 'Y'
//let money2 = money

while (asker === 'Y') {
    let withdrawal = parseInt(prompt('How much do you want to withdraw'), 10)

    if (withdrawal <= money) {
        
        parseInt(alert('Still there: '+ (money-withdrawal)))
        let num = withdrawal

        if (num >= 100000) {
            b100 = parseInt(num/100000)
            num = num % 100000
            bills[0] = bills[0] - b100
        } 
        else if (num >= 50000) {
            b50 = parseInt(num/50000)
            num = num % 50000
            bills[1] = bills[1] - b50
        }
        else if (num >= 20000) {
            b20 = parseInt(num/20000)
            num = num % 20000
            bills[2] = bills[2] - b20
        }
        else if (num >= 10000) {
            b10 = parseInt(num/10000)
            num = num % 10000
            bills[3] = bills[3] - b10
        }
        else if (num >= 5000) {
            b5 = parseInt(num/5000)
            num = num % 5000
            bills[4] = bills[4] - b5
        }
        else if (num >= 2000) {
            b2 = parseInt(num/2000)
            num = num % 2000
            bills[5] = bills[5] - b2
        }

    alert(`
        Bills of 100000: ${b100}
        Bills of 50000: ${b50}
        Bills of 20000: ${b20}
        Bills of 10000: ${b10}
        Bills of 5000: ${b5}
        Bills of 2000: ${b2}
        `)
    
    alert(`
        Bills of 100000: ${bills[0]}
        Bills of 50000: ${bills[1]}
        Bills of 20000: ${bills[2]}
        Bills of 10000: ${bills[3]}
        Bills of 5000: ${bills[4]}
        Bills of 2000: ${bills[5]}
        `)    
    }else {
        alert(`No more money, GO FUCK yourself!`)
    }

    money = (bills[0]*100000) + (bills[1]*50000) + (bills[2]*20000) + 
            (bills[3]*10000) + (bills[4]*5000) + (bills[5]*2000);
    asker = prompt('If you want keep withdrawing enter a Y').toLocaleUpperCase();    
}




