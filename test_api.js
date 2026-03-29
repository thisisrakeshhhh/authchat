async function test() {
  try {
    console.log('--- Testing Signup ---');
    const signupRes = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Test Name', username: 'testuser_new', password: 'password123', confirmPassword: 'password123', gender: 'male' })
    });
    console.log('Signup Status:', signupRes.status);
    console.log('Signup Res:', await signupRes.text());

    console.log('\n--- Testing Login ---');
    const loginRes = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'testuser_new', password: 'password123' })
    });
    console.log('Login Status:', loginRes.status);
    const setCookieHeader = loginRes.headers.get('set-cookie');
    console.log('Cookie:', setCookieHeader);
    console.log('Login Res:', await loginRes.text());

    if (!setCookieHeader) return console.log('No cookie!');
    const cookieString = setCookieHeader.split(';')[0];

    console.log('\n--- Testing /api/users ---');
    const usersRes = await fetch('http://localhost:3000/api/users', {
      headers: { 'Cookie': cookieString }
    });
    console.log('Users Status:', usersRes.status);
    const usersData = await usersRes.json();
    console.log('Users Count:', usersData.length);
    console.log('User sample:', JSON.stringify(usersData[0] || {}));

    console.log('\n--- Testing /api/message/:id ---');
    const msgRes = await fetch('http://localhost:3000/api/message/65a3f1234c91a', {
      headers: { 'Cookie': cookieString, 'Content-Type': 'application/json' }
    });
    console.log('Msg GET Status:', msgRes.status);

    console.log('\n--- Testing Logout ---');
    const logoutRes = await fetch('http://localhost:3000/api/auth/logout', { method: 'POST' });
    console.log('Logout Status:', logoutRes.status);
    console.log('Logout Res:', await logoutRes.text());

  } catch (err) {
    console.error('Test script error:', err);
  }
}
test();
