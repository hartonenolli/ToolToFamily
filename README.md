# Table of contents
- [TL;DR](#tldr)
- [Introduction](#introduction)
- [Installation](#installation)
- [Project presentation](#project)

## <a id="tldr"></a>TL;DR
This is the first of my hobby projects. The purpose of the application is to make it easier to manage a family. The target group of the application is families experiencing peak years.

With multiple children, it can be difficult to remember everything about their school days, hobbies, birthdays, etc. (I've noticed this). Environmental variables like weather or allergies can affect your plans. The app takes these things into account, for example: by suggesting the right clothing for rainy days.

## <a id="introduction"></a>Introduction
### Textual information model

| Type  | Definition |
| ------------- | ------------- |
| Calendar  | The calendar keeps track of events.  |
| Person  | The person is a family member, there is information about the family member.   |
| Information   | There is information about birthday, allergies, hobbies.   |
| Weather  | The application searches for the current weather and suggests suitable clothing.   |

### Graphical information model
![UML](https://github.com/hartonenolli/ToolToFamily/blob/main/frontend/src/pictures/UML.png?raw=true)

## <a id="installation"></a>Installation
The project is built with Node.js version 22.17.1. Please download at least Node version 22. Node installation instructions are [here](https://nodejs.org/en/download). Node comes with npm installed. The project has been using npm version 11.5.2.

After this, you can clone the repository for yourself:
```
git clone git@github.com:hartonenolli/ToolToFamily.git
```

After this, open separate terminals for the frontend and backend. In the root of the frontend, run:
```
npm install
```
You can start the frontend:
```
npm run start
```

To retrieve weather data successfully, you need a free weather API key, which you can get [here](https://www.weatherapi.com/).

You need to make .env file to the root of the backend. Add your api key to the file:
```
WEATHER_API_KEY=YOUR_API_KEY_HERE
PORT=3001
```

Run at the root of the backend:
```
npm install
```

You can start the backend:
```
npm run start
```

After these steps, you have successfully launched the application!

## <a id="project"></a>Project presentation
[Version 1, 23.09.2025](https://github.com/hartonenolli/ToolToFamily/blob/main/diary/version1.md)
