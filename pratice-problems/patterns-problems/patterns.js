const pattern1 = () => {
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
      row += "* ";
    }
    console.log(row);
  }
};

// console.log(`Pattern 1`);
// pattern1();

const pattern2 = () => {
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
};

// console.log(`Pattern 2`);
// pattern2();

const pattern3 = () => {
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 5; j > i; j--) {
      row += "* ";
    }
    console.log(row);
  }
};

// console.log(`Pattern 3`);
// pattern3();

const pattern4 = () => {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${j} `;
    }
    console.log(row);
  }
};

// console.log(`Pattern 4`);
// pattern4();

const pattern5 = () => {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${j} `;
    }
    console.log(row);
  }
};

// console.log(`Pattern 5`);
// pattern5();

const pattern6 = () => {
  for (let i = 0; i < 5; i++) {
    let rows = "";
    for (let j = 0; j < i; j++) {
      rows += `* `;
    }

    console.log(rows)
  }

  for (let i = 0; i < 5; i++) {
    let rows = "";

    for (let j = 5; j > i; j--) {
      rows += `* `;
    }
  console.log(rows)
  }
};

// pattern6();

function printDiamond() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        
        for (let j = 1; j <= 5 - i; j++) {
            row += " ";
        }
      
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }

    for (let i = 4; i >= 1; i--) {
        let row = "";
      
        for (let j = 1; j <= 5 - i; j++) {
            row += " ";
        }
       
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

// printDiamond();
