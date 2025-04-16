# Manually Setup Angular
The recommended way to create a new Angular project is to run the command line `ng new`

This creates a number of artifacts that are not necessary to the building and running of the application, and only cause confusion to somebody trying to understand the project's code.

This repository provides a minimal Angular 18 application, created by hand.

If you are using Node 18 you must first set an environment variable.
In Powershell, run:

````
"--openssl-legacy-provider" | set-content -Path env:\NODE_OPTIONS
````

See [This Stackoverflow Discussion](https://stackoverflow.com/a/69699772/25216)