
export async function askAgent(question) {
  try{
    const response = await fetch(`https://vercel-fastapiproject.vercel.app/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert("Error calling agent:", error.message);
    console.log(error.message)
    return { error: "Something went wrong. Please try again later." };
  }
}
