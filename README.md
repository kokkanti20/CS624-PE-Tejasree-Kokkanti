# Input
Users can input country name and currency in the AddCountry tab. The fields are simple text inputs that accept strings like USA and Dollar.

# Process
The data entered is validated to ensure it's not empty. Upon pressing the Add Country button, the inputs are converted into a structured object  and stored in the app's state using React's useState hook. This state is shared with the Countries screen via navigation props.

# Output
The Countries tab displays the list of all saved countries and their respective currencies in a scrollable view. If no countries have been added, a friendly message is shown instead. The app uses React Navigation's BottomTabNavigator to move between screens.
