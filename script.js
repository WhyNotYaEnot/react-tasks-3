/*2*/function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

/*3*/  function filter(handler) {
    const dataList = [1, 2, 3, 4, 5, 6];
    const filteredData = [];
  
    dataList.forEach((item) => {
      if (handler(item)) {
        filteredData.push(item);
      }
    });
  
    dataList.length = 0;
    filteredData.forEach((item) => {
      dataList.push(item); 
    });
  }
/*4*/function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return base;
  } else if (exponent < 0) {
    return 1 / pow(base, -exponent);
  } else {
    return base * pow(base, exponent - 1);
  }
}
/*5*/function powList(numbers, exponent) {
  function pow(base, exp) {
    if (exp === 0) {
      return 1;
    } else if (exp === 1) {
      return base;
    } else if (exp < 0) {
      return 1 / pow(base, -exp);
    } else {
      return base * pow(base, exp - 1);
    }
  }

  return numbers.map((num) => pow(num, exponent));
}
/*6*/function filter(handler) {
  const dataList = [1, 2, 3, 4, 5, 6];
  const filteredData = [];

  dataList.forEach((item) => {
    if (handler(item)) {
      filteredData.push(item);
    }
  });

  dataList.length = 0;
  filteredData.forEach((item) => {
    dataList.push(item);
  });
}

function powList(numbers, exponent) {
  function pow(base, exp) {
    if (exp === 0) {
      return 1;
    } else if (exp === 1) {
      return base;
    } else if (exp < 0) {
      return 1 / pow(base, -exp);
    } else {
      return base * pow(base, exp - 1);
    }
  }

  return numbers.map((num) => pow(num, exponent));
}

function powAndFilter(numbers, exponent, minValue) {
  const poweredList = powList(numbers, exponent);

  filter((item) => item >= minValue);

  return numbers;
}
/*7*/
function sum(handler) {
  return function calc() {
    const numbers = handler();
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  };
}

function handler() {
  return [1, 2, 3];
}

let calc = sum(handler);
console.log(calc());
