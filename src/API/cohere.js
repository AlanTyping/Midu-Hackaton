//Tokenize

export async function tokenizeData(text, setFormValue) {
    const url = 'https://api.cohere.ai/tokenize';

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer ptd0v2AMzbRdjHjHaJyfOzR83abkl8EMFVcw5rbE'
        },
        body: JSON.stringify({ text: text.text })
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => setFormValue(json.tokens.map((e) => e.toString()).join(' ')))
        .catch(err => console.error('error:' + err));
}

// Detokenize

export async function detokenizeData(array, setFormValue) {
    const url = 'https://api.cohere.ai/detokenize';
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer ptd0v2AMzbRdjHjHaJyfOzR83abkl8EMFVcw5rbE'
        },
        body: JSON.stringify({ tokens: array })
    };
    fetch(url, options)
        .then(res => res.json())
        .then(json => setFormValue(json.text))
        .catch(err => console.error('error:' + err));
}

// Generate 

export async function GenerateData(texto, setFormValue, setShowResults, setWaitingState) {
    const url = 'https://api.cohere.ai/generate';
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Cohere-Version': '2022-12-06',
            'content-type': 'application/json',
            authorization: 'Bearer ptd0v2AMzbRdjHjHaJyfOzR83abkl8EMFVcw5rbE'
        },
        body: JSON.stringify({
            model: "command-xlarge-nightly",
            prompt: texto.text,
            max_tokens: 250,
            temperature: 1.7,
            k: 0,
            p: 0.75,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            return_likelihoods: "NONE",
        })
    };
    fetch(url, options)
        .then(res => res.json())
        .then(async (json) => {
            const result = await json.generations[0].text;
            setFormValue(result);
            setShowResults((results) => !results);
            setWaitingState((a) => a = false);
        })
        .catch(err => console.error('error:' + err));
}