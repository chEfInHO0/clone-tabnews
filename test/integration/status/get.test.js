const api_url = 'http://localhost:3000/api/v1/status'

test('Get endpoint /status should return 200', async () => {
  const req = await fetch(api_url)
  expect(req.status).toBe(200)
})