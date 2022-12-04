import styled from "styled-components/native";
import { StatusBar } from "react-native";

const statusBarMargin = StatusBar.currentHeight ? StatusBar.currentHeight.toString() : "0";

const ScreenSafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${statusBarMargin}px
`;

export default ScreenSafeArea;