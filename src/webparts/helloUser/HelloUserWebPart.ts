import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HelloUserWebPartStrings';
import HelloUser from './components/HelloUser';
import { IHelloUserProps } from './components/IHelloUserProps';
import {sp} from '@pnp/sp/presets/all'

export interface IHelloUserWebPartProps {
  description: string;
}

export default class HelloUserWebPart extends BaseClientSideWebPart<IHelloUserWebPartProps> {
  public onInit(): any {
   
    return super.onInit().then(() => {

      // This should not be set here, but in the SampleService as the data is retrieved by the service
      // But this is the only place where we have this.context

      // Anyays this doesn't appear to be working as a separate instance of "sp" is created in the library component
      // Refer comments in SampleLibraryLibrary.ts      
      sp.setup({
        spfxContext : this.context
      });
    });
  } 
  public render(): void {
    const element: React.ReactElement<IHelloUserProps> = React.createElement(
      HelloUser,
      {
        description: this.properties.description,
        spcontext: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
  
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
