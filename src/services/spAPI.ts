import { sp } from "@pnp/sp/presets/all";

export const w = sp.setup({
  sp: {
    headers: {
      Accept: "application/json;odata=verbose",
    },
    baseUrl: "https://globalvale.sharepoint.com/teams/SSMA_RECFerrosos/"
  },
});

