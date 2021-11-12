<script>
	let name;
	let email;
	let message = '';
	let error = '';

	const submitForm = async () => {
		try {
			const submit = await fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({ name, email })
			});
			const data = await submit.json();
			console.log(data);
			message = data;
		} catch (e) {
			error = e;
		}
	};
</script>

{#if !message && !error}
	<div class="flex items-center justify-center">
		<form on:submit|preventDefault={submitForm}>
			<label for="name" class=" block  "> Name:</label>
			<input type="text" name="name" class="mb-5" bind:value={name} />
			<label for="email" class=" block "> Email:</label>
			<input type="email" name="email" class="mb-5" bind:value={email} />
			<input type="submit" class=" block py-2 px-16" />
		</form>
	</div>
{:else if message}
	<p>Hi {message.name}, your form has been submitted.</p>
{:else if error}
 Oops, caught an error <br>	{error}
{/if}
