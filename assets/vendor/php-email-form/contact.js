const scriptURL = 'https://script.google.com/macros/s/AKfycbyHi8saz0klQ0I8tkHwJoBlduf16A-z_Qh4-vl2Rdjzg4lhaq4/exec'
				const form = document.forms['feedback-form']
				form.addEventListener('submit', e => {
					e.preventDefault()
					fetch(scriptURL, {
							method: 'POST',
							body: new FormData(form)
						})
						.then(response => alert("Your message has been sent. Thank you! Hope you have a great day!"))
						.then(response => form.reset())
						.catch(error => console.error('Error!', error.message))
				})