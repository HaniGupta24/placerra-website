// signup.js
  // Client-side helpers
  const form = document.getElementById('signupForm');
  const emailEl = document.getElementById('email');
  const passwordEl = document.getElementById('password');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');
  const emailHelp = document.getElementById('emailHelp');
  const passwordHelp = document.getElementById('passwordHelp');
  const togglePassword = document.getElementById('togglePassword');

  function validatePassword(p) {
    // Example rules: min 8 chars, one uppercase, one number, one special char
    return p.length >= 8 &&
           /[A-Z]/.test(p) &&
           /[0-9]/.test(p) &&
           /[^A-Za-z0-9]/.test(p);
  }

  togglePassword.addEventListener('click', () => {
    const isPwd = passwordEl.type === 'password';
    passwordEl.type = isPwd ? 'text' : 'password';
    togglePassword.setAttribute('aria-pressed', String(isPwd));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formMessage.textContent = '';
    emailHelp.textContent = '';
    passwordHelp.textContent = '';

    // Use built-in validity for email
    if (!emailEl.checkValidity()) {
      emailHelp.textContent = 'Please enter a valid email address.';
      emailEl.focus();
      return;
    }

    const pwd = passwordEl.value;
    if (!validatePassword(pwd)) {
      passwordHelp.textContent = 'Password must be ≥8 characters, include an uppercase letter, a number and a symbol.';
      passwordEl.focus();
      return;
    }

    // Disable UI while submitting
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing up...';

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailEl.value.trim(), password: pwd })
      });

      if (!res.ok) {
        const err = await res.json().catch(()=>({message:'Unexpected server error'}));
        formMessage.textContent = err.message || 'Signup failed';
        formMessage.style.color = 'red';
      } else {
        formMessage.textContent = 'Signup successful. Check your email to confirm.';
        formMessage.style.color = 'green';
        form.reset();
      }
    } catch (networkErr) {
      formMessage.textContent = 'Network error — please try again.';
      formMessage.style.color = 'red';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'SIGN UP';
    }
  });
