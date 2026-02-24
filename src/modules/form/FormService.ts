import type { FormValues } from './types.ts'

export class FormService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users'

  async send(data: FormValues): Promise<void> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: data['full-name'].trim(),
        email: data.email.trim(),
        message: data.message.trim(),
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send form data.')
    }
  }
}
