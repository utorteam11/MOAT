async function signUpFormHandler(event) {

    event.preventDefault();

    const first_name = document.querySelector("input[id='first-name'").value.trim();
    const last_name = document.querySelector("input[id='second-name'").value.trim();
    const email = document.querySelector("input[id='email-login'").value.trim();
    const password = document.querySelector("input[id='password-login'").value.trim();
    const type = document.querySelector('input[name="resident-type"]:checked').value;


    if(first_name && last_name && email && password && type) {
        switch(type) {
            case 'tenant':
                const tenant_unit = document.querySelector('input[id="tenant-unit"]').value;
                // fetch request for tenant
                break;
            case 'landlord':
                const response = await fetch('/api/landlords', {
                    method: 'POST',
                    body: JSON.stringify({
                        first_name,
                        last_name,
                        email,
                        password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(response.ok) {
                    document.location.replace('/dashboard')
                } else {
                    alert(response.statusText);
                }

                break;
        }
    }
}

const FormStuff = {
  
    init: function() {
      this.applyConditionalRequired();
      this.bindUIActions();
    },
    
    bindUIActions: function() {
      $("input[type='radio']").on("change", this.applyConditionalRequired);
    },
    
    applyConditionalRequired: function() {
      
      $(".require-if-active").each(function() {
        var el = $(this);
        if ($(el.data("require-pair")).is(":checked")) {
          el.prop("required", true);
        } else {
          el.prop("required", false);
        }
      });
      
    }
    
};
  
FormStuff.init();

document.querySelector('.signup').addEventListener('submit', signUpFormHandler);