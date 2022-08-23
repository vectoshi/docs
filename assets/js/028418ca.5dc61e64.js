"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[4834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2952:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:31},i=void 0,s={unversionedId:"Smart Contracts/NRC-31 SubDAO",id:"Smart Contracts/NRC-31 SubDAO",title:"NRC-31 SubDAO",description:"newcoin.daos creates DAOs on top of existing SubPools, using the tokens of each SubPool as a voting weight mechanism. The SubPool founder is automatically the custodian of the SubDAO and can review proposals and veto them before they get submitted to the DAO.",source:"@site/docs/Smart Contracts/NRC-31 SubDAO.md",sourceDirName:"Smart Contracts",slug:"/Smart Contracts/NRC-31 SubDAO",permalink:"/docs/docs/Smart Contracts/NRC-31 SubDAO",draft:!1,editUrl:"https://github.com/Newcoin-Foundation/docs/tree/main/packages/docs/Smart Contracts/NRC-31 SubDAO.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"NRC-30 MainDAO",permalink:"/docs/docs/Smart Contracts/NRC-30 MainDAO"},next:{title:"SDKs",permalink:"/docs/docs/category/sdks"}},l={},c=[{value:"DAO Governance",id:"dao-governance",level:2},{value:"Create a DAO",id:"create-a-dao",level:3},{value:"Create a DAO Proposal",id:"create-a-dao-proposal",level:3},{value:"Create a DAO Stake Proposal",id:"create-a-dao-stake-proposal",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"newcoin.daos creates DAOs on top of existing SubPools, using the tokens of each SubPool as a voting weight mechanism. The SubPool founder is automatically the custodian of the SubDAO and can review proposals and veto them before they get submitted to the DAO. "),(0,n.kt)("h1",{id:"subdao-actions"},"SubDAO Actions"),(0,n.kt)("p",null,"All SubDAO actions can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Newcoin-Foundation/newcoin-sdk"},"Newcoin-SDK")),(0,n.kt)("h2",{id:"dao-governance"},"DAO Governance"),(0,n.kt)("h3",{id:"create-a-dao"},"Create a DAO"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const nco = new NCO_BlockchainAPI(\n    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services\n);\nnco.createDAO({\n    author: "satoshi.io" //string;\n    author_prv_key: "<private key>" //string;\n    descr: "My first DAO" //string - cannot be changed afterwards!!!;\n}).then((res) => {\n   console.log("Transaction ID: " + res?.TxID_createDao)\n}).catch((error) => console.log("Error: "+error))\n        \n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can only create one DAO per User.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Requires: private key, Errors: auth, negative amt"),(0,n.kt)("p",null,"Requires: Authorization from Account "),(0,n.kt)("p",null,"Errors: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"Error: Invalid checksum ..."'),": Authentication Error - probably that payer & Payer private key do not match"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"Error: transaction declares authority ..."'),": Authentication Error - seems the payer and private key do not match.")),(0,n.kt)("p",null,"TBD")),(0,n.kt)("h3",{id:"create-a-dao-proposal"},"Create a DAO Proposal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const nco = new NCO_BlockchainAPI(\n    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services\n);\nnco.createDaoProposal({\n    dao_id?: "12345" //string, optional; you have to provide either the dao_id or the dao_owner handle.\n    dao_owner?: "nakamoto.io" //string, optional;\n    proposer: "satoshi.io" //string, required;\n    proposer_prv_key: "<private key>" //string, required;\n    summary: "Summary of the Proposal   " //string, required;\n    title: "Catchy proposal title" //string, required;\n    url: "https://www.moreinfotomyproposal.com" //string, required;\n    vote_start: "2022-08-23" //string, required, ISO8601 - "yyyy-MM-dd";\n    vote_end: "2022-08-30" //string, required, ISO8601 - "yyyy-MM-dd";\n}).then((res) => {\n    console.log("Transaction ID: " + res?.TxID_createDaoProposal)\n    console.log("DAO ID: " + res?.dao_id)\n    console.log("Proposal ID: " + res?.proposal_id)\n}).catch((error) => console.log("Error: "+error))\n        \n')),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Requires: private key, Errors: auth, negative amt"),(0,n.kt)("p",null,"Requires: Authorization from Account "),(0,n.kt)("p",null,"Errors: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"Error: Invalid checksum ..."'),": Authentication Error - probably that payer & Payer private key do not match"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"Error: transaction declares authority ..."'),": Authentication Error - seems the payer and private key do not match."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"create_proposal : vote start shoud be greater then current time"'),": vote_start should be in the future."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"create_proposal : vote end should be greater then vote start"'),": vote_end should be after vote_start."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"create_proposal : proposer is not whitelisted"'),": the proposer needs to be whitelisted first."))),(0,n.kt)("h3",{id:"create-a-dao-stake-proposal"},"Create a DAO Stake Proposal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const nco = new NCO_BlockchainAPI(\n    NCO_BlockchainAPI.defaults.devnet_urls, NCO_BlockchainAPI.defaults.devnet_services\n);\nnco.createDaoStakeProposal({\n    dao_id?: "12345" //string, optional; you have to provide either the dao_id or the dao_owner handle.\n    dao_owner?: "nakamoto.io" //string, optional;\n    proposer: "satoshi.io" //string, required;\n    proposer_prv_key: "<private key>" //string, required;\n    quantity: "10.0000 vtoken" //string, required - Format "#.#### <token>" Token needs to match the to\'s token\n    to: "vitalik.io" //string, required\n    vote_start: "2022-08-23" //string, required, ISO8601 - "yyyy-MM-dd";\n    vote_end: "2022-08-30" //string, required, ISO8601 - "yyyy-MM-dd";\n}).then((res) => {\n    console.log("Transaction ID: " + res?.TxID_createDaoProposal)\n    console.log("Proposal ID: " + res?.proposal_id)\n}).catch((error) => console.log("Error: "+error))\n        \n')),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Requires: private key, Errors: auth, negative amt"),(0,n.kt)("p",null,"Requires: Authorization from Account "),(0,n.kt)("p",null,"Errors: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"Error: Invalid checksum ..."'),": Authentication Error - probably that payer & Payer private key do not match"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"Error: transaction declares authority ..."'),": Authentication Error - seems the payer and private key do not match."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"create_proposal : vote start shoud be greater then current time"'),": vote_start should be in the future."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"create_proposal : vote end should be greater then vote start"'),": vote_end should be after vote_start."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'"create_proposal : proposer is not whitelisted"'),": the proposer needs to be whitelisted first."))))}u.isMDXComponent=!0}}]);