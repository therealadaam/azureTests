# azureTests

On your Azure Functions app, in App Settings you need to set loggingDbConStr to the connection
string of the Cosmos DB (this is the string that includes the URI and the master key).

2nd function is used to query the logs for the last X days and return a JSON document.
To do that you need to use JSON body with 'startDate' set to a JS Date object.
If you are using PowerShell to call you need to:
`$startDate = [Math]::Floor(1000 * (Get-Date ([datetime]::UtcNow) -UFormat %s))`
`$json = @{ startDate = $startDate.toString()} | ConvertTo-Json`