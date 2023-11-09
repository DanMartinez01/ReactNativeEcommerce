import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../Screens/Profile";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Profile} name="profile" />
    </Stack.Navigator>
  );
};

export default ProfileNav;
