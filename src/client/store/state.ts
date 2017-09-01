/**
 * 身份信息類
 */
type IdentityCardInfo = {

  "keyID": string,
  "number": string,
  "companyNO": string,
  "type": number,
  "cardNO": string,
  "typeName": string,
  "identityCardType": number,
  "identityCardTypeName": string,
  "identityCardNO": string,
  "effectiveDate": string,
  "state": number,
  "stateName": string,
  "addTime": string,
  "modifyTime": string,
  "isDelete": number,
  "modifyUser": string

}

/**
 * 一個person的信息
 */
type Person = {
  domainDeptID: string,
  type: number,
  nodeDesc: string,
  deptNodeName: string,
  foreNodeCode: string,
  character: string, //字母
  choosed: boolean,
  gender?: number,
  genderName?: string,
  birthDay?: string,
  phone?: string,
  userNO?: string,
  englishName?: string,
  isSeniorExecutive?: number,
  identityCardInfoList?: Array<IdentityCardInfo>
}

type myState = {
  count: number,
  searchVal: string,
  maxNum: number,
  Persons: Array<Person>,
  title: string
}

const data:myState = {
  count: 6,
  searchVal: '',
  // 最大可选人数
  maxNum: 9,
  // 用户数据
  Persons: [],
  title: '',
}
export default data
