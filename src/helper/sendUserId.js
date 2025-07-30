export async function sendUserIdToBackend(userId) {
    try {
        const res = await fetch(`${process.env.VUE_APP_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Failed to save user');
        }

        console.log('User sent to backend:', data);
        return data;
    } catch (error) {
        console.error('Error sending userId to backend:', error);
        throw error;
    }
}
