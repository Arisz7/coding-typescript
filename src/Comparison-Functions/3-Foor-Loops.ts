for (let i: number = 0; i < 10; i++) {
  /*console.log(i);*/
}

let num: number[] = [10, 20, 30, 40, 50, 60, 70];
for (let i: number = 0; i < num.length; i++) {
  {
    /*console.log(num[i]);*/
  }
}

let mixData2: (string | number)[] = ["Cosmo", 13, 50, "Wanda"];

// for (let item of mixData2.entries()) console.log(item[0], item);

for (let [i, item] of mixData2.entries()) {
  /*console.log(`${i} ${item}`);*/
}
