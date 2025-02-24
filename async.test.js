function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('delay')
      if (id <= 0) reject(new Error('Error'))
      resolve({ id })
    }, 100)
  })
}

function fetchCallback(id, fn) {
  setTimeout(() => {
    console.log('delay')
    const user = { id }
    fn(user)
  }, 100)
}

test('프로미스 테스트', () => {
  fetchData(1).then((data) => {
    expect(data).toEqual({ id: 1 })
  })
})

test('async&await 테스트', async () => {
  const data = await fetchData(1)
  expect(data).toEqual({ id: 1 })
})

test('resolves, rejects 테스트', async () => {
  await expect(fetchData(1)).resolves.toEqual({ id: 1 })
  await expect(fetchData(-1)).rejects.toThrow('Error')
})

test('콜백 테스트', (done) => {
  function callback(data) {
    expect(data).toEqual({ id: 1 })
    done()
  }

  fetchCallback(1, callback)
})
