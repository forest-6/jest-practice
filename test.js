function getUser(id) {
  if (id <= 0) throw new Error('Invalid ID')
  return {
    id,
    email: `user${id}@test.com`
  }
}

test('사용자 객체 반환', () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`
  })
})

test('원시값 테스트', () => {
  expect(1).toBe(1)
})

test('배열 테스트', () => {
  const city = ['seoul', 'busan', 'daejeon']
  expect(city).toHaveLength(3)
  expect(city).toContain('seoul')
  expect(city).not.toContain('gwangju')
  expect(city[1]).toBe('busan')
})

test('예외처리 테스트', () => {
  expect(() => getUser(-1)).toThrow()
  expect(() => getUser(-1)).toThrow('Invalid ID')
})

test('불리언 테스트', () => {
  expect('0').toBeTruthy()
  expect(0).toBeFalsy()
})
