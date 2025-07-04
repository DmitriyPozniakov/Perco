<template>
  <section class="login-section">
    <p class="logo">perco</p>
    <form>
      <div class="form-header">
        <p class="form-logo">Login</p>
        <p class="form-text">
          Sign in to view your personal information and check up on your recent
          orders
        </p>
      </div>
      <div class="form-inputs">
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <a href="#" class="forgot">Forgot password?</a>
      </div>
      <div class="form-buttons">
        <button class="login-button">Log in</button>
        <button class="guest-button">Continue as a guest</button>
        <a href="#" class="without-acc">Don’t have an account? Sign up</a>
      </div>
    </form>
  </section>
</template>

<style scoped>
.login-section {
  width: 100%;
  height: auto;
  min-height: 90rem;
  background-image: url("@/assets/images/loginBG.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;

  padding: 30px;
}

.logo {
  color: #fff;
  font-family: "Maroon Black";
  font-size: clamp(9rem, 10vw, 14rem);
  font-weight: 400;
}

form {
  padding: 50px 90px;
  background: #fafafa;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.form-logo {
  color: #302a18;
  font-family: "Maroon Black";
  font-size: clamp(7rem, 10vw, 12rem);
  font-style: normal;
  font-weight: 400;
  margin-bottom: 15px;
}

.form-text {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.8rem;
  font-weight: 300;
  max-width: 38rem;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-inputs input {
  border-radius: 8px;
  background: #fff;
  box-shadow: -4px 4px 21.8px 0px rgba(0, 0, 0, 0.05);
  padding: 16px;
  color: #302a18;
  font-family: "SFR-regular";
}

.form-inputs input::placeholder {
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.6rem;
  font-weight: 300;
  opacity: 0.5;
}

a {
  text-decoration: underline;
  color: #302a18;
  font-family: "SFR-regular";
  font-size: 1.5rem;
}

.forgot {
  opacity: 0.4;
}

.without-acc {
    opacity: 0.8;
    margin-top: 10px;
    text-align: center;
}


.form-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-buttons button {
  padding: 16px 32px;
  border-radius: 8px;
  font-family: "SFR-regular";
  font-size: 1.4rem;
  text-transform: uppercase;
}

.login-button {
  background: #302a18;
  color: #fff;
}

.guest-button {
  background: #fff;
  color: #302a18;
  border: 1px solid #302a18;
}

@media (max-width: 1200px) {
    .login-section {
        flex-direction: column;
        gap: 75px;
         min-height: 75rem;
    }
    form {
        padding: 40px; 
    }
    .logo {
      display: none;
    }
}
</style>