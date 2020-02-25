import { Navigation } from "react-native-navigation";
import OnBoarding from "./OnBoarding";
import Login from "./Login";

Navigation.registerComponent(`OnBoarding`, () => OnBoarding);
Navigation.registerComponent(`Login`, () => Login);