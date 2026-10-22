Installatie in les

Installatie Vite & EsLint

npm create vite@latest

npm install

npm create @eslint/config@latest
in de browser

Met TS
Npm install jiti

In package.json onder debug add onder Script
"eslint": "eslint . --ext .js"
//Controleer code
Npm run eslint

Of enable in MarketPlace: EsLint


# communiceren met een backend
> npm install json-server@0.17.4
>> ## package.json onder "script"
>>> voeg toe
>>>> `"backend": "json-server --watch public/db.json --port 3000"`
>>>>> Deze verwacht een db.json file in de public directory. 


Debug
In Eslint.config

Add
rules: {
"no-console": "warn",
},

If jsconfig.json in root
Dat wordt dit automatisch ingelezen
