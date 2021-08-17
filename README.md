# Full-Stack-open-2021
[Full Stack open 2021](https://fullstackopen.com/en/)

## Part 1
### Course Information
Given index.js and App.js, refactor the code so that it consists of four new components: Header, Content, Part, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders three Part components of which each renders the name and number of exercises of one part, and Total renders the total number of exercises. Define the new components in file App.js. Modify the variable definitions of the App component into a single JavaScript object. Refactor the application so that it still works.

### Unicafe
Implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad. Display the total number of collected feedback for each category, the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1), and the percentage of positive feedback. Display statistics only once feedback has been gathered.

### Anecdotes
Given an application, expand it by adding a button that can be clicked to display a random anecdote. Expand your application so that you can vote for the displayed anecdote. Implement the final version of the application that displays the anecdote with the largest number of votes.

## Part 2
### Course Information and Separate Module
Continue to work on the Course Information exercise. Define a component responsible for formatting a single course called Course. Calculate the sum of exercises with the array method reduce. Declare the Course component as a separate module, which is imported by the App component.

### The Phonebook
Given an App component, continue to work on the phonebook application. Implement the addition of a person, prevent the user from adding names that already exist, and allow users to add phone numbers. Implement a search field that can be used to filter the list of people by name. Refactor the application by extracting at least three components from the application. Maintain the application's state and all event handlers in the App root component. Store the initial state of the application in the file db.json. Start json-server on port 3001. Modify the application such that the initial state of the data is fetched from the server using the axios-library. Complete the fetching with an Effect hook.

### Data for Countries
Create an application, in which one can look at data of various countries. The country to be shown is found by typing a search query into the search field. If there are over 10 countries that match the query, then the user is prompted to make their query more specific. If there are ten or fewer countries, but more than one, then all countries matching the query are shown. When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken there, are shown. When the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country. Add to the view showing the data of a single country, the weather report for the capital of that country.

## Part 7
### Routed Anecdotes
Given an application, add React Router to it so that by clicking links in the Menu-component the view can be changed. Implement a view for showing a single anecdote.
