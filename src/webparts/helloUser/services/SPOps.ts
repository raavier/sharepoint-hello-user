import {sp} from '@pnp/sp/presets/all'
import { ISiteUserInfo } from "@pnp/sp/site-users/types";
import { ISiteGroupInfo } from "@pnp/sp/site-groups";
import { AxiosRequestConfig } from 'axios';
import api from './api';
import useSWR from 'swr'

export interface ICurrentUser {
    siteUserInfo?: ISiteUserInfo;
    siteGroupInfo?: ISiteGroupInfo[];
    isManager?: boolean;
    isImmediateManager?: boolean;
    isTrainOffice?: boolean;
    isUser?: boolean;
  }
/* 
 export const getCurrentUser = async ():Promise<ICurrentUser> => {
        try {
            const response:ICurrentUser= await sp.web.currentUser()
            console.log(response.siteUserInfo.LoginName)
            return response
        } catch (error) {
            console.error(error)
            window.alert("Erro no Login")
        }
    }

    export default { getCurrentUser } 
 */

/* export function useUserFetch(url:string):({data:ICurrentUser,error:string}){
    const headerConfig: AxiosRequestConfig = {headers: {
        "accept ": "application/json;odata=verbose",
        "content-type": "application/json;odata=verbose" ,
        "Transfer-Encoding": "chunked",
        "Vary": "Origin,Accept-Encoding",
        "X-SharePointHealthScore": "2",
        "X-SP-SERVERSTATE": "ReadOnly=0",
        "DATASERVICEVERSION": "3.0",
        "SPClientServiceRequestDuration": "9",
        "SPRequestGuid": "b68211a0-1086-1000-5ded-9118725d66ad",
        "request-id": "b68211a0-1086-1000-5ded-9118725d66ad",
        "MS-CV": "oBGCtoYQABBd7ZEYcl1mrQ.0",
        "Strict-Transport-Security": "max-age=31536000,max-age=31536000; includeSubDomains",
        "X-FRAME-OPTIONS": "SAMEORIGIN,DENY",
        "Content-Security-Policy": "frame-ancestors 'self' teams.microsoft.com *.teams.microsoft.com *.skype.com *.teams.microsoft.us local.teams.office.com *.powerapps.com *.yammer.com *.officeapps.live.com *.office.com *.stream.azure-test.net *.microsoftstream.com *.dynamics.com;",
        "MicrosoftSharePointTeamServices": "16.0.0.22001",
        "X-Content-Type-Options": "nosniff,nosniff",
        "X-MS-InvokeApp": "1; RequireReadOnly",
        "x-ms-request-id": "b68211a0-1086-1000-5ded-9118725d66ad",
        "Cache-Control": "no-store, max-age=0, private",
        "P3P": "CP=\"ALL IND DSP COR ADM CONo CUR CUSo IVAo IVDo PSA PSD TAI TELo OUR SAMo CNT COM INT NAV ONL PHY PRE PUR UNI\"",
        "Set-Cookie": "ARRAffinity=48c1aab958578a8842b7561455dec5acf0c7064c05bffd287bd301d60aed5721;Path=/;HttpOnly;Secure;Domain=sharepointonline-wus.azconn-wus.p.azurewebsites.net,ARRAffinitySameSite=48c1aab958578a8842b7561455dec5acf0c7064c05bffd287bd301d60aed5721;Path=/;HttpOnly;SameSite=None;Secure;Domain=sharepointonline-wus.azconn-wus.p.azurewebsites.net",
        "X-AspNet-Version": "4.0.30319",
        "X-Powered-By": "ASP.NET",
        "Timing-Allow-Origin": "*",
        "x-ms-apihub-cached-response": "false",
        "Date": "Wed, 29 Dec 2021 11:41:16 GMT",
        "Content-Type": "application/json; odata=verbose; charset=utf-8",
        "Expires": "Tue, 14 Dec 2021 11:41:16 GMT",
        "Last-Modified": "Wed, 29 Dec 2021 11:41:16 GMT",
        "Content-Length": "911" 
      }}

    const { data, error } = useSWR<ICurrentUser>(url,async url => {
        const response = await api.get(url,headerConfig)
        console.log('useRest:',response)
        return response.data
    })
    console.log('useRest2:',{data})
    return {data, error}

    const { data, error } = useSWR<ICurrentUser>(url,async url => {
        const response = await await sp.web.currentUser()
        console.log('useRest:',response)
        return response.data
    })
    console.log('useRest2:',{data})
    return {data, error}
} */