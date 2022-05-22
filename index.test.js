const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
    expect(input).not.toEqual(expected);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    utils.trimPropertiesMutation(input)
    expect(input).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const output = utils.trimPropertiesMutation(input)
    expect(input).toBe(output);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    expect(utils.findLargestInteger([{integer: 2}])).toEqual(2);
    expect(utils.findLargestInteger([{integer: 2},{integer: 8},{integer: -4},{integer: 1}])).toEqual(8);
  })
})


describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    expect(counter.countDown()).toEqual(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    expect(counter.countDown()).toEqual(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    for (let i = 0; i < 1; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 2; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toEqual(100);
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(90);
    expect(focus.tank).toEqual(17);
  })
  test('[17] refueling allows to keep driving', () => {
    expect(focus.drive(601)).toEqual(600);
    expect(focus.tank).toEqual(0);
    focus.refuel(10);
    expect(focus.drive(300)).toEqual(900);

  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toEqual(20);
    focus.refuel(10);
    expect(focus.tank).toEqual(20);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    utils.isEvenNumberAsync(2).then( result => expect(result).toEqual(true));
  })
  test('[20] resolves false if passed an odd number', () => {
    utils.isEvenNumberAsync(3).then( result => expect(result).toEqual(false));
  })
})

describe('[Exercise 8] More tests', () => {
  test('[21] compare empty objects', () => {
    expect({}).toEqual({});
  }) 
})
