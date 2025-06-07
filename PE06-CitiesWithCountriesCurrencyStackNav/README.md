Input

The program provides an intuitive user interface where users can navigate through two tabs: CountriesNav and CitiesNav. The user interacts by tapping on a country or city from a displayed list. No manual data entry is required; the app uses predefined arrays for countries (with currency information) and cities. The input is purely through user interactions (taps and navigation gestures).

Process

The app is built using React Native and React Navigation libraries. It implements a tab-based navigation at the top level, with each tab containing its own stack-based navigation. In CountriesNav, the CountriesStack manages screen transitions between the country list and country details (which includes currency). Similarly, CitiesNav uses CitiesStack to transition between city list and city details. The app leverages React Native components such as FlatList, Button, and Text, while navigation state is managed internally through React Navigation’s stack navigator and tab navigator.

Output

The output is a functional mobile app with a user-friendly interface. It displays lists of countries and cities on separate tabs. Upon selecting a country or city, the app navigates to a corresponding detail screen showing the country name with its currency or the city name with relevant details. The navigation is seamless, and the UI provides clear feedback, making the app interactive and engaging. The project demonstrates the integration of tab and stack navigations, enhancing the user experience through structured and layered screen transitions.

