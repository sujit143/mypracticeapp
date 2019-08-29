export class User {
public constructor(
  public user_email:string,
  public user_name:string,
  public user_mobile_no:string,
  public user_password:string
){}
}
export class UserResolved{
  public constructor (public data:any[],public errormsg:string){}
}
