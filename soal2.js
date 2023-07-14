const chalk = require("chalk");
const table = require("table");

const PijarFood = (price, voucher, distance, tax) => {
    let discount = 0;
    let ongkir = 0;
    let ppn = 0;

    if (typeof price !== "number" || isNaN(price)) {
        return console.log(`Please enter the correct ${chalk.red("Price")}`);
    } else if (voucher !== "PIJARFOOD5" && voucher !== "DITRAKTIRPIJAR") {
        return console.log(`${chalk.red("Voucher")} not found`);
    } else if (typeof distance !== "number" || isNaN(distance)) {
        return console.log(`Please enter the correct ${chalk.red("Distance")}`);
    } else if (typeof tax !== "boolean") {
        return console.log(`Please choose true or false ${chalk.red("Tax")}`);
    } else {
        if (voucher === "PIJARFOOD5" && price >= 50000) {
            discount = Math.min(price * 0.5, 50000);
        } else if (voucher === "DITRAKTIRPIJAR" && price >= 25000) {
            discount = Math.min(price * 0.6, 30000);
        }

        ongkir = 5000 + (distance - 2) * 3000;
        ongkir = Math.max(ongkir, 5000);

        if (tax) {
            ppn = price * 0.05;
        }

        let subtotal = price - discount + ongkir + ppn;

        const data = [
            ["Price", `Rp.${price}`],
            ["Discount", `Rp.${discount}`],
            ["Ongkir", `Rp.${ongkir}`],
            ["PPN", `Rp.${ppn}`],
            [`${chalk.bold("SubTotal")}`, `Rp.${chalk.bold(subtotal)}`],
        ];

        const config = {
            columns: {
                0: {
                    alignment: "left",
                },
            },
        };

        const output = table.table(data, config);

        console.log(output);
    }
};

const price = 100000;
const voucher = "PIJARFOOD5";
const distance = 10;
const tax = false;

PijarFood(price, voucher, distance, tax);
