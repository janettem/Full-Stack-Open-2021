# countries
[Data for Countries](https://fullstackopen.com/en/part2/getting_data_from_server#exercises-2-11-2-14)

Create an application, in which one can look at data of various countries. The country to be shown is found by typing a search query into the search field. If there are over 10 countries that match the query, then the user is prompted to make their query more specific. If there are ten or fewer countries, but more than one, then all countries matching the query are shown. When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken there, are shown. When the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country. Add to the view showing the data of a single country, the weather report for the capital of that country.

## Usage
Create a free account to [weatherstack](https://weatherstack.com/), a real-time world weather REST API.

Open this directory in a terminal.

Install the dependencies:

```
npm install
```

Create .env file with the following data:

```
REACT_APP_API_KEY=API_KEY
```

Replace API_KEY with your weatherstack API access key.

Run the application:

```
npm start
```
