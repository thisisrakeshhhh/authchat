import fs from 'fs';
async function test() {
  const results = {};
  try {
    const ts = Date.now();
    const uname = 'testuser_' + ts;
    const pwd = 'password123';

    // 1. Signup
    const signupRes = await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: 'Test User', username: uname, password: pwd, confirmPassword: pwd, gender: 'male' })
    });
    results.signupStatus = signupRes.status;
    results.signupCookieHeader = signupRes.headers.get('set-cookie');
    results.signupBody = await signupRes.text();

    let cookieString = '';
    if (results.signupCookieHeader) {
      cookieString = results.signupCookieHeader.split(';')[0];
    }

    // 2. Login
    const loginRes = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: uname, password: pwd })
    });
    results.loginStatus = loginRes.status;
    results.loginCookieHeader = loginRes.headers.get('set-cookie');
    results.loginBody = await loginRes.text();

    if (!cookieString && results.loginCookieHeader) {
      cookieString = results.loginCookieHeader.split(';')[0];
    }
    
    // 3. /api/users
    const usersRes = await fetch('http://localhost:3000/api/users', {
      headers: { 'Cookie': cookieString || '' }
    });
    results.usersStatus = usersRes.status;
    results.usersData = await usersRes.text();
    
    // 4. /api/message/:id
    // Need a valid ObjectId 24-char hex string
    const fakeId = '65e3f1234c91a78912345678';
    const msgRes = await fetch('http://localhost:3000/api/message/' + fakeId, {
      headers: { 'Cookie': cookieString || '', 'Content-Type': 'application/json' }
    });
    results.msgStatus = msgRes.status;
    results.msgBody = await msgRes.text();

    // 5. Logout
    const logoutRes = await fetch('http://localhost:3000/api/auth/logout', { method: 'POST' });
    results.logoutStatus = logoutRes.status;
    results.logoutCookieHeader = logoutRes.headers.get('set-cookie');
    results.logoutBody = await logoutRes.text();

  } catch(e) {
    results.error = e.message;
  }
  
  fs.writeFileSync('test_results.json', JSON.stringify(results, null, 2), 'utf8');
}
test();
