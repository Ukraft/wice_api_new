// this is passed to json-schema-example-loader
export default {
    title: 'Wice CRM API Documentation',
    // enhance your CURL examples by base url and request headers...
    curl: {
        // The baseUrl typically ends in a / so that relative hrefs
        // in your schemas can be joined with it in accordance
        // with RFC 3986 relative URI reference resolution rules.
        //
        // By default, the generated app's src/client/introduction.js
        // component displays this baseUrl in your documentation.
        baseUrl: 'https://oihwice.wice-net.de/',
        requestHeaders: {
            // This is a JSON Schema which treats the HTTP request
            // headers as if they were a JSON object instance.
            required: [
                'Content-Type',
            ],
            properties: {
                // Include other headers here, such as for auth
                'Content-Type': {
                    type: 'string',
                    enum: [
                        'application/json',
                    ],
                    example: 'application/json',
                    description: 'Content type of the API request',
                },
                'X-API-KEY': {
                    type: 'string',
                    example: '[YOUR_API_KEY]',
                    description: 'API Key from Wice CRM',
                },
                'cookie': {
                    type: 'string',
                    example: '[YOUR_COOKIE]',
                    description: 'Cookie from Wice CRM',
                }
            },
        },
    },
};
