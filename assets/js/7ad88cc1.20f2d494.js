"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:22},i=void 0,l={unversionedId:"Contracts/Market/NRC-22 MainPool",id:"Contracts/Market/NRC-22 MainPool",title:"NRC-22 MainPool",description:"MainPool contract swaps $NCO for Governance NCO with a ticker $GNCO, locks $NCO and distributes fees automatically according to the stake fee distribution structure. $GNCO tokens are minted after the lock and are burned when $NCO is unlocked and recovered by the owner.",source:"@site/docs/Contracts/Market/NRC-22 MainPool.md",sourceDirName:"Contracts/Market",slug:"/Contracts/Market/NRC-22 MainPool",permalink:"/docs/Contracts/Market/NRC-22 MainPool",draft:!1,editUrl:"https://github.com/Newcoin-Foundation/docs/tree/main/packages/docs/Contracts/Market/NRC-22 MainPool.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"NRC-21 NFT Market",permalink:"/docs/Contracts/Market/NRC-21 NFT Market"},next:{title:"NRC-23 SubPool",permalink:"/docs/Contracts/Market/NRC-23 SubPool"}},s={},c=[{value:"Staking",id:"staking",level:2},{value:"Stake to the MainPool",id:"stake-to-the-mainpool",level:3},{value:"Unstake instantly from the MainPool",id:"unstake-instantly-from-the-mainpool",level:3},{value:"Delayed unstake from the MainPool",id:"delayed-unstake-from-the-mainpool",level:3},{value:"Redeem a delayed unstake from the MainPool",id:"redeem-a-delayed-unstake-from-the-mainpool",level:3},{value:"Account management in the MainPool",id:"account-management-in-the-mainpool",level:2},{value:"open",id:"open",level:3},{value:"close",id:"close",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MainPool contract swaps $NCO for Governance NCO with a ticker $GNCO, locks $NCO and distributes fees automatically according to the stake fee distribution structure. $GNCO tokens are minted after the lock and are burned when $NCO is unlocked and recovered by the owner. "),(0,r.kt)("h1",{id:"mainpool-actions"},"MainPool Actions"),(0,r.kt)("p",null,"All MainPool actions can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Newcoin-Foundation/newcoin-sdk"},"Newcoin-SDK")),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("h3",{id:"stake-to-the-mainpool"},"Stake to the MainPool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const nco = new NCO_BlockchainAPI(\n    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services\n);\nnco.stakeMainDAO({\n    amt: "10.0000 NCO" //string;\n    payer: "satoshi.io" //string;\n    payer_prv_key: "<private key>" //string;\n}).then((res) => {\n   console.log("Transaction ID: " + res.TxID_stakeMainDAO)\n}).catch((error) => console.log("Error: "+error))\n        \n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Requires: private key, Errors: auth, negative amt"),(0,r.kt)("p",null,"Requires: Authorization from Account "),(0,r.kt)("p",null,"Errors: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: Invalid checksum ..."'),": Authentication Error - probably that payer & Payer private key do not match"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: transaction declares authority ..."'),": Authentication Error - seems the payer and private key do not match."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"do_stake : amount in should be positive"'),": the amount in amt should be positive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: Expected symbol to be A-Z and between one and seven characters"'),': the amt needs to be in the Format "#.#### NCO"'))),(0,r.kt)("h3",{id:"unstake-instantly-from-the-mainpool"},"Unstake instantly from the MainPool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const nco = new NCO_BlockchainAPI(\n    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services\n);\nnco.instUnstakeMainDAO({\n    amt: "10.0000 NCO" //string;\n    payer: "satoshi.io" //string;\n    payer_prv_key: "<private key>" //string;\n}).then((res) => {\n   console.log("Transaction ID: " + res?.TxID_unstakeMainDAO)\n}).catch((error) => console.log("Error: "+error))\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Requires: private key, Errors: auth, negative amt"),(0,r.kt)("p",null,"Requires: Authorization from Account"),(0,r.kt)("p",null,"Errors: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: Invalid checksum ..."'),": Authentication Error - probably that payer & Payer private key do not match"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: transaction declares authority ..."'),": Authentication Error - seems the payer and private key do not match."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"do_stake : amount in should be positive"'),": the amount in amt should be positive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: Expected symbol to be A-Z and between one and seven characters"'),': the amt needs to be in the Format "#.#### GNCO"'))),(0,r.kt)("h3",{id:"delayed-unstake-from-the-mainpool"},"Delayed unstake from the MainPool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const nco = new NCO_BlockchainAPI(\n    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services\n);\nnco.dldUnstakeMainDAO({\n    amt: "10.0000 NCO" //string;\n    payer: "satoshi.io" //string;\n    payer_prv_key: "<private key>" //string;\n}).then((res) => {\n   console.log("Transaction ID: " + res?.TxID_unstakeMainDAO)\n}).catch((error) => console.log("Error: "+error))\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Requires: private key, Errors: auth, negative amt"),(0,r.kt)("p",null,"Requires: Authorization from Account"),(0,r.kt)("p",null,"Errors: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: Invalid checksum ..."'),": Authentication Error - probably that payer & Payer private key do not match"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: transaction declares authority ..."'),": Authentication Error - seems the payer and private key do not match."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"do_stake : amount in should be positive"'),": the amount in amt should be positive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Error: Expected symbol to be A-Z and between one and seven characters"'),': the amt needs to be in the Format "#.#### GNCO"'))),(0,r.kt)("h3",{id:"redeem-a-delayed-unstake-from-the-mainpool"},"Redeem a delayed unstake from the MainPool"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"}," function redeem (from, id){\n    TBD\n }\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Requires: Account, Errors: ?"),"Requires: Authorization from Account Errors:"),(0,r.kt)("h2",{id:"account-management-in-the-mainpool"},"Account management in the MainPool"),(0,r.kt)("h3",{id:"open"},"open"),(0,r.kt)("p",null,"Creates 0 balance account in balances table. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"}," function open (owner, symbol, payer){\n    TBD\n }\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Enables you to pay for opening of the balance account on the MainPool for someone else. If you like to pay for the account, but not for the amount staked.")),(0,r.kt)("h3",{id:"close"},"close"),(0,r.kt)("p",null,"Closes 0 balance account in balances table. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"}," function close (owner, symbol){\n    TBD\n }\n")))}p.isMDXComponent=!0}}]);