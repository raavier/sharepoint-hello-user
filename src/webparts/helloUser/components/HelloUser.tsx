import * as React from 'react';
import { IHelloUserProps } from './IHelloUserProps';
import { IHelloUserState } from './IHelloUserState';
import { sp } from "@pnp/sp";
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
import styled from 'styled-components';

var spObj = null;  
  
export default class HelloUser extends React.Component<IHelloUserProps, IHelloUserState> {  
  
  // constructor to intialize state and pnp sp object.  
  constructor(props: IHelloUserProps,state:IHelloUserState) {  
    super(props);  
    this.state = {jsonResponse:null,Title:null,responseOf:"",firstName:"", lastName:""};  
    sp.setup({  
      spfxContext: this.props.spcontext  
    });  
    spObj = sp;
  }
 public async componentDidMount(){
  let user = await sp.web.currentUser.get();  
    let nameArray:string[] = user.Title.split(" ")
    console.log("teste",nameArray)
    this.setState({jsonResponse:user.Title,responseOf:"Get Current User",firstName:nameArray[0],lastName:nameArray[nameArray.length-1]});  
 }
  
  public render(): React.ReactElement<IHelloUserProps> {  
    ()=> this.getCurrentUser()
    return (  
        <Container>
          <Image src='https://globalvale.sharepoint.com/teams/SSMA_RECFerrosos/SiteAssets/images/gifHome/teste-gif_2.gif'></Image>
          <Span1 >Bem vindo, </Span1> 
          <Span2 >{this.state.firstName} {this.state.lastName}</Span2>
        </Container>
    )
  }
  
  private setTitle(element) {  
    var val = (element as HTMLInputElement).value;  
    this.setState({"Title":val});  
  }  
  
  // method to get current user  
  private async getCurrentUser(){  
    let user = await sp.web.currentUser.get(); 
    console.log("user:",user) 
    this.setState({jsonResponse:user.Email,responseOf:"Get Current User",firstName:user.Email});  
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

const Image = styled.img`
    position: absolute;
    height: 100%;
    min-width: 100%;
    bottom: 0;
    right: -100px;
    z-index: 0;
`
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    padding: 62px 70px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
`
const Span1 = styled.span`
    border-radius: 4px;
    font-size: 28px;
    text-align: left;
    letter-spacing: 0;
    color: #fff;
    padding: 1px 10px;
    z-index: 2;
    position: relative;
    display: table;
    font-family: CaeciliaLTStd-Roman;
    background: #edb111 0 0 no-repeat padding-box;
    margin-bottom: 3px;
`

const Span2 = styled.span`
    border-radius: 4px;
    font-size: 28px;
    text-align: left;
    letter-spacing: 0;
    color: #fff;
    padding: 1px 10px;
    z-index: 2;
    position: relative;
    display: table;
    font-family: CaeciliaLTStd-Roman;
    background: #007e7a 0 0 no-repeat padding-box;
`