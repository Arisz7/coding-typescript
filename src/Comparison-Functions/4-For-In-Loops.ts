let data: (number | string)[] = ["Papa", 12, 50, "Corazon"];

for (let dataPoint in data) {
  // console.log(typeof dataPoint);
  //   console.log(typeof +dataPoint);
  console.log(`${+dataPoint + 1} ${data[dataPoint]}`);
}
