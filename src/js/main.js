

(
  function () {
      const password = {
          idElement: document.getElementById('password'),
          init() {
              document.querySelector(".showPass").addEventListener('click', () => {
                  this.change()
              })
          },
          change() {
              if (this.idElement.type === 'password') {
                  this.idElement.type = 'text'
              } else {
                  this.idElement.type = 'password'
              }
          }
      }

      password.init();
  }
)();