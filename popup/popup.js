async function ifetch(){
  const response = await fetch("https://www.notion.so/api/v3/queryCollection?src=initial_load",{
    method: "Post",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers : {
      "X-Notion-Active-User-Header" : "d80b58ba-861b-46c8-b5a2-5df1f2f75810",
      "Referer" : "https://www.notion.so/32d985e76cad4e1f96b101285e6500b2?v=460dc7543d1a4b4194e22d5460662666"
    },
    aggregationStatus: "stripped",
    collectionView : {id: "460dc754-3d1a-4b41-94e2-2d5460662666", spaceId: "172b9409-cab8-47fc-968e-0e93e618613c"},
    loader : {
      reducers : {calendar_results: {type: "results", filter: {operator: "and"}, limit: 5000}},
      searchQuery: "",
      sort:[],
      userId:"d80b58ba-861b-46c8-b5a2-5df1f2f75810",
      userTimeZone:"Asia/Seoul"
    },
    source:{
      id: "83dea995-a36d-4769-a428-3fc5de18529b",
      spaceId: "172b9409-cab8-47fc-968e-0e93e618613c",
      type: "collection"
    }
  })
  const info = response.json()
  console.log(info["result"]["sizeHint"]);
}

ifetch();