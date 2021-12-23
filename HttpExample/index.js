module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Item: " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    const price = req.body.price
    const description = req.body.description

    if (name) {
        console.log("creating database entry")
        context.bindings.outputDocument = JSON.stringify({
            // create a random ID
            id: new Date().toISOString() + Math.random().toString().substr(2,8),
            name: name,
            price: "£"+price,
            description: description
        }); 
        // document = JSON.stringify({
        //     // create a random ID
        //     id: new Date().toISOString() + Math.random().toString().substr(2, 8),
        //     name: name,
        //     price: "£"+price,
        //     description: description
        // });
        // console.table(document)
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
        // body: document
    };
}