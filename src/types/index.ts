import { NavigationProp } from '@react-navigation/native';
type RootStackParamList = {
  Home: undefined;
  Slider: undefined;
};

export type TNavigationType = NavigationProp<RootStackParamList>;

export interface ISlideItem {
  item: {
    key: string;
    title: string;
    text: string;
    image: any; 
  }
}
export interface IContainer {
  children: React.ReactNode;
}