import styled from "styled-components/native";
import { StatusBar } from "react-native";

const statusBarMargin = StatusBar.currentHeight ? StatusBar.currentHeight.toString() : "0";

const SafeArea = styled.SafeAreaView`
  margin-top: ${statusBarMargin}px
`;

export default SafeArea;