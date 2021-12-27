declare interface IHelloUserWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloUserWebPartStrings' {
  const strings: IHelloUserWebPartStrings;
  export = strings;
}
