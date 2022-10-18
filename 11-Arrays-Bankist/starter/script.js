'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const eurToUsd = 1.1;
let currentAccount;
let movements;
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movementsToUsd = movements?.map(mov => (mov * eurToUsd).toFixed(2));

const createUserName = function (accounts) {
  accounts.forEach(
    acc =>
      (acc.username = acc.owner
        .toLocaleLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};
createUserName(accounts);

const addMovementsDescription = function (movements) {
  let movementDescriptions = movements?.map((mov, i) => {
    return `Movement ${i + 1}: You ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`;
  });
};
addMovementsDescription(currentAccount?.movements);

const updateDate = function (labelDate) {
  labelDate.textContent = new Date().toLocaleDateString();
};
updateDate(labelDate);

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};

//event handlers
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //update msg
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    movements = currentAccount.movements;

    //update data
    updateUI(currentAccount);

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  } else {
    inputLoginUsername.value = inputLoginPin.value = '';
    containerApp.style.opacity = 0;
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance > amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Welcome`;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

const updateBalance = function (acc) {
  acc.balance = movements
    .reduce((acc, curr, i, arr) => acc + curr, 0)
    .toFixed(2);
  labelBalance.textContent = `${acc.balance}€`;
};

const updateSumIn = function (deposits) {
  const depositSum = deposits
    .reduce((acc, curr, i, arr) => acc + curr, 0)
    .toFixed(2);
  labelSumIn.textContent = `${depositSum}€`;
};

const updateSumOut = function (withdrawals) {
  const withdrawalSum = withdrawals.reduce(
    (acc, curr, i, arr) => acc + curr,
    0
  );
  labelSumOut.textContent = `${Math.abs(withdrawalSum).toFixed(2)}€`;
};

const updateInterest = function (acc) {
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const updateSummary = function (acc) {
  const deposits = acc.movements.filter(mov => mov > 0);
  const withdrawals = acc.movements.filter(mov => mov < 0);
  updateSumIn(deposits);
  updateSumOut(withdrawals);
  updateInterest(acc);
};

const updateUI = function (acc) {
  displayMovements(acc.movements);
  updateBalance(acc);
  updateSummary(acc);
};

const max = movements?.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, movements[0]);

const min = movements?.reduce((acc, curr) => {
  if (acc < curr) {
    return acc;
  } else {
    return curr;
  }
}, movements[0]);
