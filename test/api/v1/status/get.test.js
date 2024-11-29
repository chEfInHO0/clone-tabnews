const api_url = 'http://localhost:3000/api/v1/status'

test('', async () => {
  const req = await fetch(api_url)
  expect(req.status).toBe(200)
})