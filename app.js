const yargs = require("yargs");

let list = [];

yargs.command({
    command: "add",
    describe: "Generate a sequence of numbers from 1 to 10 and add them to the list",
    handler: () => {
        for (let i = 1; i <= 10; i++) {
            list.push(i);
        }
        console.log("Numbers added successfully. The list now contains:", list);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove specific numbers (2, 4, 6, and 8) from the list",
    handler: () => {
        list = list.filter(num => ![2, 4, 6, 8].includes(num));
        console.log("Removing numbers [2, 4, 6, 8] from the list. Updated list:", list);
    }
});

yargs.command({
    command: "display",
    describe: "Display the current list",
    handler: () => {
        console.log("Current list:", list);
    }
});

yargs.parse();
