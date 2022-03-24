const prompts = require('prompts');
const axios = require('axios');

(async () => {
    const prompt = await prompts({
        type: 'text',
        name: 'callsign',
        message: 'Please input a callsign'
        // TODO - validate calls
    });

    axios.get(`https://hamcall.dev/${prompt.callsign}.json`)
        .then(response => console.log(response.data))
}) ();
