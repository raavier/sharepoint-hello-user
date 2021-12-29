import * as React from 'react';
import {useState, useEffect} from 'react'
import styles from './HelloUser.module.scss';
import { IHelloUserProps } from './IHelloUserProps';
import { IHelloUserState } from './IHelloUserState';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { sp } from "@pnp/sp";
import { ConsoleListener, Logger, LogLevel } from '@pnp/logging';
//import { getCurrentUser} from '../services/SPOps'
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
import { ISiteGroupInfo } from "@pnp/sp/site-groups";
export interface ICurrentUser {
  siteUserInfo?: ISiteUserInfo;
  siteGroupInfo?: ISiteGroupInfo[];
  isManager?: boolean;
  isImmediateManager?: boolean;
  isTrainOffice?: boolean;
  isUser?: boolean;
}
/*
export default function HelloUser(props:IHelloUserProps ):React.ReactElement {
  const [user, setUser] = useState<string>();
  
  // Refer comments in SampleLibraryLibrary.ts      
      
/* 
  const {data} = useUserFetch('/_api/web/currentuser')
  console.log('data: ',data)
   *//*
  useEffect(() => {
    (async () => {
      let userData = await getCurrentUser()
      console.log('teste',userData)
      setUser(userData.siteUserInfo.LoginName)
    })();
  } 
  , [])
  /* constructor(props: IHelloUserProps){
    super(props);
    this._spServive = new SPOperations
    this.state = {}
  }; */

/*
    return (
     <div> 
       <div></div>
       {user}
      </div> 
    )
  }
*/


 
 
 
  
//import library  
import {  PrimaryButton, Stack,MessageBar, MessageBarType } from 'office-ui-fabric-react';  
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';  
 
import ReactJson from 'react-json-view';  
  
//create state  

  
var spObj = null;  
  
export default class HelloUser extends React.Component<IHelloUserProps, IHelloUserState> {  
  
  // constructor to intialize state and pnp sp object.  
  constructor(props: IHelloUserProps,state:IHelloUserState) {  
    super(props);  
    this.state = {jsonResponse:null,Title:null,responseOf:""};  
    sp.setup({  
      spfxContext: this.props.spcontext  
    });  
    spObj = sp;  
  }
  

  
  public render(): React.ReactElement<IHelloUserProps> {  
    return (  
      <div className={ styles.container }>  
        <div className={ styles.container }>  
          <div className={ styles.row }>  
            <div className={ styles.column }>  
              <span className={ styles.title }>Welcome to PnP JS User Operations Demo!</span>  
            </div>  
          </div>  
        </div>  
        <br></br>  
        <TextField value={this.state.Title} label="Enter User ID" onChange={(e)=> this.setTitle(e.target)}/>  
        <br></br>  
        <Stack horizontal tokens={{childrenGap:40}}>    
                <PrimaryButton text="Get Current User" onClick={()=>this.getCurrentUser()}  />    
                <PrimaryButton text="Get Current User Groups" onClick={()=>this.getCurrentUserGroups()} />    
             </Stack>    
             <br></br>  
             <Stack horizontal tokens={{childrenGap:40}}>    
                <PrimaryButton text="Get All Site Users" onClick={()=>this.getAllSiteUser()} />    
                <PrimaryButton text="Get User by ID" onClick={()=>this.getUserById()} />   
             </Stack>    
            <br></br>  
            <br></br>  
        {this.state.jsonResponse &&  
          <React.Fragment>  
            <div>Respone from: {this.state.responseOf}</div>  
            <br></br>  
            <ReactJson src={this.state.jsonResponse}  collapsed={false} displayDataTypes={false} displayObjectSize={false}/>  
            </React.Fragment>  
        }  
      </div>  
    );  
  }  
  
  // event handler to set users input to state  
  private setTitle(element) {  
    var val = (element as HTMLInputElement).value;  
    this.setState({"Title":val});  
  }  
  
  // method to get current user  
  private async getCurrentUser(){  
    let user = await sp.web.currentUser.get();  
    this.setState({jsonResponse:user,responseOf:"Get Current User"});  
  }  
  
  // method to get current user groups  
  private async getCurrentUserGroups(){  
    let groups = await sp.web.currentUser.groups();  
    this.setState({jsonResponse:groups,responseOf:"Get Current User Groups"});  
    console.log(groups);  
  }  
  
  //method to get all site users  
  private async getAllSiteUser(){  
    let groups = await sp.web.siteUsers();  
    this.setState({jsonResponse:groups,responseOf:"Get All site users"});  
    console.log(groups);  
      
  }  
  
  //method to get user by id  
  private async getUserById (){  
   let user = await  sp.web.getUserById(parseInt(this.state.Title)).get();  
   this.setState({jsonResponse:user,responseOf:"Get User by ID"});  
  }  
}  
