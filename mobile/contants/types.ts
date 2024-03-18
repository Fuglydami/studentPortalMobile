export interface ColorsType {
  secondaryYellow: string;
  white: string;
  lightestGreen: string;
  lightGreen: string;
  lightGrey: string;
  primaryBlack: string;
  primaryGreen: string;
  secondaryGreen: string;
  primaryGrey: string;
  danger: string;
  darkGreen: string;
  accentGrey: string;
}
export interface HeaderTextType {
  text1: string;
  text2: string;
  marginBottom?: number;
  textColor1?: string;
  textColor2?: string;
}
export interface inputType {
  placeholder?: string;
  label?: string;
  error?: string;
  text?: string;
  setText?: React.Dispatch<React.SetStateAction<string>>;
}
export interface ScreenType {
  options?: {
    headerShown: boolean;
    headerTitle?: (props: any) => ReactElement;
    headerRight?: () => ReactElement;
  };
  name: string;
  component: React.ComponentType<any>;
}
export type ContentItem = {
  course: string;
  title: string;
};
