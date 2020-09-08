module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.bindings.logging = JSON.stringify({
        date: Date.now(),
        source: context.bindings.req.body.source,
        message: context.bindings.req.body.message,
        severity: context.bindings.req.body.severity
      });
      context.res ={
          status: 200,
          body: "It worked!"
      }

      context.done();
};