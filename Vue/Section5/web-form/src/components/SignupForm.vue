<template>
  <form @submit.prevent="submitForm">
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" lass="error">{{ passwordError }}</div>

    <label>Role: </label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" required v-model="tempSkill" @keyup.alt="addSkill" />
    <!-- Quiero que cada vez que pulsa alt+coma me guarde el skill y limpie el campo -->
    <div v-for="skill in skills" :key="skill" class="pill" >
      <span @click="deleteSkill(skill)" >{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <!-- Ejemplo de checkbox para array:
    <div>
      <input type="checkbox" value="faire" v-model="names"/>
      <label>Fairë</label>
    </div>
    <div>
      <input type="checkbox" value="unfaire" v-model="names"/>
      <label>Unfairë</label>
    </div>
    <div>
      <input type="checkbox" value="illifaire" v-model="names"/>
      <label>Illifairë</label>
    </div>
    -->

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>

  <p>E-mail: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      // para 2way data binding uso la v-model directive
      // actualiza cuando el usuario teclea
      email: '',
      password: '',
      role: 'designer', // si le doy valor inicial, esto será el default
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: '',
      // names: []    ejemplo de checkbox para array
    };
  },
  methods: {
    addSkill(e) {
      // Se lanza si es una coma y hay un valor antes de la coma
      if (e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          // quiero que no me repita ningún skill
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = '';
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      })
    },
    submitForm() {
      // arriba, con submit.prevent evito que se lance el submit
      // valido la contraseña:
      this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long';
      if(!this.passwordError) {
        console.log("email: " + this.email);
        console.log("password: " + this.password);
        //etc
      }
    }
  }
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 30px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>