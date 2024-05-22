#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright("\tGuest Verification\t"));
let myList = true;
let invitedGuestList = ["sana", "sara", "kanwal", "ayesha", "hafsa", "mehwish", "khadija", "kulsoom", "samina", "areeba", "sidrah", "sumaiyah"];
while (myList) {
    let guestName = await inquirer.prompt({
        name: "guest",
        type: "input",
        message: chalk.yellow("Please Enter Your Name:")
    });
    let invitedGuest = guestName.guest;
    let lowerGuestName = invitedGuest.toLowerCase();
    if (invitedGuestList.includes(lowerGuestName)) {
        console.log(chalk.blueBright(`Welcome Ms. ${invitedGuest}! please make yourself comfortable.`));
        myList = false;
    }
    else {
        console.log(chalk.blueBright(`\nSorry, Ms. ${invitedGuest}, Your name is not in the today guest list.\n`));
        let askNameAgain = await inquirer.prompt({
            name: "otherName",
            type: "confirm",
            message: chalk.yellow("Do, You have another name you go by? If so, we can check again")
        });
        if (!askNameAgain.otherName) {
            myList = false;
            console.log(chalk.blueBright(`\nWe apologize, because you aren't in the guest list.Please contact the event organizer.`));
        }
    }
}
