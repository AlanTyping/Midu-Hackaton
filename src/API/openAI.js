// Replace with your OpenAI API key

export function callApi(text, setFormValue, setShowResults, setWaitingState) {
    // Set the API endpoint
    const endpoint = "https://api.openai.com/v1/completions";

    // Set the parameters for the API call
    const params = {
        model: "text-davinci-003",
        prompt: text.text,
        max_tokens: 100,
        temperature: 0.5,
    };

    // Make the API call and get the response
    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
        },
        body: JSON.stringify(params),
    })
        .then((response) => response.json())
        .then(async (data) => {
            // Print the response
            const responseText = await data.choices[0].text
            setFormValue(responseText);
            setShowResults((results) => !results);
            setWaitingState((a) => a = false);
        })
        .catch(err => alert(err))
};